import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetail } from "../store/actions/User";
import formatRupiah from "../helpers/formatPrice";
import Loading from "./Loading";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import LotCard from "../components/lotCard";
import firestore from "../config/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useNavigate } from "react-router-dom";

export default function ProfileView() {
  const navigate = useNavigate();

  const id = localStorage.getItem("id");
  const dispatch = useDispatch();
  const [showTopup, setShowTopup] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const { userById, isLoading } = useSelector((state) => state.userReducer);

  const userLotref = firestore.collection("bid");
  const userLotQuery = userLotref.where("userId", "==", +id);
  const [lots] = useCollectionData(userLotQuery, { idField: "id" });

  const Highestref = firestore.collection("HighestBid");
  const [highest, loadingHighest] = useCollectionData(Highestref, {
    idField: "id",
  });
  let bidList = [];

  // console.log("lots", lots);
  // console.log("highest", highest);

  useEffect(() => {
    dispatch(fetchUserDetail(id));
  }, [id]);

  useEffect(() => {
    if (userById !== null) {
      setPreloadedValues({
        username: userById.data.username,
        email: userById.data.email,
        phoneNumber: userById.data.phoneNumber,
        address: userById.data.address,
      });
    }
  }, [userById]);

  const [preloadedValues, setPreloadedValues] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const preloadedValuesHandler = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    const newValues = { ...preloadedValues };
    newValues[name] = value;
    setPreloadedValues(newValues);
  };

  // useEffect(() => {
  //   const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
  //   const myMidtransClientKey = "SB-Mid-client-s6SV0WfrkztKRJyG";

  //   let scriptTag = document.createElement("script");
  //   scriptTag.src = midtransScriptUrl;

  //   scriptTag.setAttribute("data-client-key", myMidtransClientKey);

  //   document.body.appendChild(scriptTag);
  //   return () => {
  //     document.body.removeChild(scriptTag);
  //   };
  // }, []);

  const { register, handleSubmit } = useForm();

  const onSubmitTopup = async (data) => {
    try {
      const UserId = id;
      const { price } = data;
      // console.log(UserId, price);
      // const cb = await axios.post(`http://localhost:3000/topup`, {
      const cb = await axios.post(`https://api.mahakarya-auction.com/topup`, {
        UserId,
        price,
      });
      // console.log(cb.data);
      let win = window.open(cb.data.redirect_url, "_blank");
      win.focus();
      setShowTopup(false);
    } catch (error) {
      Swal.fire({
        icon: "error",
        iconColor: "#57240f",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  };

  const onSubmitEdit = async (data) => {
    console.log(data);
    try {
      if (data.password !== data.currentPassword) {
        throw new Error("password not match");
      }
      // await axios.put(`hhttp://localhost:3000/users/${id}`, data);
      let username = preloadedValues.username
      let password = data.password
      let email = preloadedValues.email
      let phoneNumber = preloadedValues.phoneNumber
      let address = preloadedValues.address
      await axios.put(`https://api.mahakarya-auction.com/users/${id}`, { username, password, email, phoneNumber, address }, {
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      });
      Swal.fire({
        icon: "success",
        iconColor: "#57240f",
        title: "Edit",
        text: "Edit Success!",
      });
      setShowEdit(false);
    } catch (error) {
      if (error.message) {
        Swal.fire({
          icon: "error",
          iconColor: "#57240f",
          title: "Oops...",
          text: "password not match",
        });
      } else {
        Swal.fire({
          icon: "error",
          iconColor: "#57240f",
          title: "Oops...",
          text: error.response.data.message,
        });
      }
    }
  };

  // const collection = {
  //   Lots: [
  //     {
  //       id: 1,
  //       name: "Paintings 1",
  //       artistName: "Artist 1",
  //       primaryImage: "https://loremflickr.com/g/1080/720/painting?lock=2",
  //       startingBid: 1000000
  //     },
  //     {
  //       id: 2,
  //       name: "Paintings 1",
  //       artistName: "Artist 1",
  //       primaryImage: "https://loremflickr.com/g/1080/720/painting?lock=2",
  //       startingBid: 1000000,
  //       Bids: [
  //         {
  //           id: 1,
  //           bidPrice: 1500000
  //         }
  //       ]
  //     },
  //     {
  //       id: 3,
  //       name: "Paintings 1",
  //       artistName: "Artist 1",
  //       primaryImage: "https://loremflickr.com/g/1080/720/painting?lock=2",
  //       startingBid: 1000000,
  //       Bids: []
  //     },
  //     {
  //       id: 4,
  //       name: "Paintings 1",
  //       artistName: "Artist 1",
  //       primaryImage: "https://loremflickr.com/g/1080/720/painting?lock=2",
  //       startingBid: 1000000,
  //       Bids: [
  //         {
  //           id: 1,
  //           bidPrice: 1500000
  //         }
  //       ]
  //     },
  //     {
  //       id: 5,
  //       name: "Paintings 1",
  //       artistName: "Artist 1",
  //       primaryImage: "https://loremflickr.com/g/1080/720/painting?lock=2",
  //       startingBid: 1000000,
  //       Bids: [
  //         {
  //           id: 1,
  //           bidPrice: 1500000
  //         }
  //       ]
  //     },
  //     ,
  //   ]
  // };

  const [pageNumber, setPageNumber] = useState(1);
  const [limit] = useState(10);
  const offset = pageNumber * limit - limit;
  function handlePrev() {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  }

  function handleNext() {
    if (pageNumber === Math.ceil(lots.length / limit)) return;
    setPageNumber(pageNumber + 1);
  }

  const checkIsHighest = (e) => {
    if (loadingHighest) {
      return;
    }
    // console.log(highest);
    const ishighest = highest?.filter(
      (f) => f.userId === e.userId && f.lotId === e.lotId
    );
    if (ishighest.length > 0) {
      return "Highest";
    } else {
      return "Outbid";
    }
  };

  const highestPrice = (e) => {
    if (loadingHighest) {
      return;
    }

    const data = highest?.filter((f) => f.lotId === e.lotId);
    if (data.length > 0) {
      return formatRupiah(data[0].price);
    }
  };

  return (
    <div className="flex flex-col justify-between pt-10">
      <Navbar />
      <div className="w-[80vw] mx-auto my-10 min-h-[64vh]">
        <div className="flex flex-row h-full">
          <div className="w-1/3 flex flex-col">
            <div className="w-full flex flex-col">
              <div className="text-left flex flex-row justify-between">
                <div className="w-2/3">
                  {userById && (
                    <h1 className="text-6xl font-bold font-bosque">
                      {userById.data.username}
                    </h1>
                  )}
                </div>
              </div>
              <div className="flex flex-col font-poppins text-xl text-left pt-4">
                {isLoading ? (
                  <Loading type={"spin"} color={"#0E3EDA"} />
                ) : (
                  <table className="w-1/2">
                    <tbody>
                      <tr>
                        <td>Email</td>
                        <td className="px-2">:</td>
                        {userById && (
                          <td className="py-2">{userById.data.email}</td>
                        )}
                      </tr>
                      {/* <br /> */}
                      <tr>
                        <td>Balance</td>
                        <td className="px-2">:</td>
                        {userById && (
                          <td className="py-2">
                            {formatRupiah(userById.data.balance)}
                          </td>
                        )}
                      </tr>
                      {/* <br /> */}
                      <tr>
                        <td>Spent</td>
                        <td className="px-2">:</td>
                        {userById && (
                          <td className="py-2">
                            {formatRupiah(userById.data.balanceSpent)}
                          </td>
                        )}
                      </tr>
                      {/* <br /> */}
                      <tr>
                        <td>Phone Number</td>
                        <td className="px-2">:</td>
                        {userById && (
                          <td className="py-2">{userById.data.phoneNumber}</td>
                        )}
                      </tr>
                      {/* <br /> */}
                      <tr>
                        <td>Address</td>
                        <td className="px-2">:</td>
                        {userById && (
                          <td className="py-2">{userById.data.address}</td>
                        )}
                      </tr>
                      {/* <br /> */}
                      <tr>
                        <td>Joined At</td>
                        <td className="px-2">:</td>
                        {userById && (
                          <td className="py-2">
                            {userById.data.createdAt.split("T")[0]}
                          </td>
                        )}
                      </tr>
                      {/* <br /> */}
                      <tr>
                        <td>Actions</td>
                        <td className="px-2">:</td>
                        <td>
                          <button
                            onClick={() => setShowEdit(true)}
                            className="btn bg-[#702F13] text-[#ebd7bb] border-0 hover:bg-[#451D0C]"
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                )}
              </div>
              <div
                tabIndex="0"
                className="collapse collapse-arrow border-2 border-[#675237] rounded-box w-[80%] mt-5 pl-5 shadow-sm"
              ></div>
              <br />
              <br />
              <div className="flex flex-col w-[80%] px-3 py-3">
                <div className="flex flex-row justify-center">
                  <div className="overflow-hidden rounded-lg shadow-lg bg-[#675237]">
                    <img
                      className="object-cover w-full h-56"
                      src="https://cdn-2.tstatic.net/tribunnews/foto/bank/images/midtrans.jpg"
                      alt="avatar"
                    />

                    <div className="py-5 text-center">
                      <button
                        onClick={() => setShowTopup(true)}
                        className="btn bg-[#451D0C] text-[#ebd7bb] border-0 hover:bg-[#57240f]"
                      >
                        Topup balance
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <>
                {showTopup ? (
                  <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative my-6 mx-auto w-11/12 max-w-xl h-fit font-encode bg-[#ebd7bb] rounded-xl text-slate-900">
                        <button
                          className="px-3 py-1 rounded-full absolute right-4 top-4 bg-[#57240f] hover:bg-[#451D0C] text-[#ebd7bb] text-xl font-encode"
                          onClick={() => setShowTopup(false)}
                        >
                          X
                        </button>
                        <div className="w-full px-4 mt-8 flex flex-col justify-center items-center">
                          <p className="text-2xl font-semibold">
                            Topup Your Balance
                          </p>
                          <form
                            className="w-full flex flex-col mt-12 px-16 pb-16"
                            onSubmit={handleSubmit(onSubmitTopup)}
                          >
                            <label
                              htmlFor="price"
                              className="py-2 pl-4 text-md font-semibold font-encode"
                            >
                              Price
                            </label>
                            <input
                              type="number"
                              className="w-full px-8 py-4 text-md font-encode border border-slate-500 rounded-full"
                              name="price"
                              placeholder="input your number"
                              {...register("price")}
                            />
                            <button
                              type="submit"
                              className="bg-[#57240f] hover:bg-[#451D0C] text-[#ebd7bb] text-xl leading-6 font-medium py-5 px-6 mt-12 rounded-lg"
                            >
                              Topup
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null}
                {showEdit ? (
                  <>
                    <div>
                      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative my-6 mx-auto w-11/12 max-w-xl h-fit font-encode bg-[#ebd7bb] rounded-xl text-slate-900">
                          <button
                            className="px-3 py-1 rounded-full absolute right-4 top-4 bg-[#57240f] hover:bg-[#451D0C] text-[#ebd7bb] text-xl font-encode"
                            onClick={() => setShowEdit(false)}
                          >
                            X
                          </button>
                          <div className="w-full px-4 mt-8 flex flex-col justify-center items-center">
                            <p className="text-2xl font-semibold">
                              Edit Your Profile
                            </p>
                            <form
                              className="w-full flex flex-col mt-12 px-16 pb-16"
                              onSubmit={handleSubmit(onSubmitEdit)}
                            >
                              <label
                                htmlFor="username"
                                className="py-2 pl-4 text-md font-semibold font-encode"
                              >
                                username
                              </label>
                              <input
                                type="username"
                                className="w-full px-8 py-4 text-md font-encode border border-slate-500 rounded-full"
                                name="username"
                                value={preloadedValues.username}
                                onChange={preloadedValuesHandler}
                              // {...register("username")}
                              />
                              <label
                                htmlFor="email"
                                className="py-2 pl-4 text-md font-semibold font-encode"
                              >
                                email
                              </label>
                              <input
                                type="text"
                                className="w-full px-8 py-4 text-md font-encode border border-slate-500 rounded-full"
                                name="email"
                                value={preloadedValues.email}
                                onChange={preloadedValuesHandler}
                              />
                              <label
                                htmlFor="password"
                                className="py-2 pl-4 text-md font-semibold font-encode"
                              >
                                password
                              </label>
                              <input
                                type="password"
                                className="w-full px-8 py-4 text-md font-encode border border-slate-500 rounded-full"
                                name="password"
                                {...register("password")}
                              />
                              <label
                                htmlFor="password"
                                className="py-2 pl-4 text-md font-semibold font-encode"
                              >
                                confirm password
                              </label>
                              <input
                                type="password"
                                className="w-full px-8 py-4 text-md font-encode border border-slate-500 rounded-full"
                                name="password"
                                {...register("currentPassword")}
                              />
                              <label
                                htmlFor="phoneNumber"
                                className="py-2 pl-4 text-md font-semibold font-encode"
                              >
                                Phone Number
                              </label>
                              <input
                                type="text"
                                className="w-full px-8 py-4 text-md font-encode border border-slate-500 rounded-full"
                                name="phoneNumber"
                                value={preloadedValues.phoneNumber}
                                onChange={preloadedValuesHandler}
                              />
                              <label
                                htmlFor="address"
                                className="py-2 pl-4 text-md font-semibold font-encode"
                              >
                                address
                              </label>
                              <input
                                type="text"
                                className="w-full px-8 py-4 text-md font-encode border border-slate-500 rounded-full"
                                name="address"
                                value={preloadedValues.address}
                                onChange={preloadedValuesHandler}
                              />
                              <button
                                type="submit"
                                className="bg-[#57240f] hover:bg-[#451D0C] text-[#ebd7bb] text-xl leading-6 font-medium py-5 px-6 mt-12 rounded-lg"
                              >
                                Edit
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </div>
                  </>
                ) : null}
              </>
            </div>
          </div>
          <div className="w-2/3 flex flex-col">
            <h1 className="text-6xl font-bold font-bosque">
              Transaction History
            </h1>
            <div className="collapse collapse-arrow border-2 border-[#675237] rounded-box mt-5 pl-5 py-4 shadow-sm overflow-visible">
              <table className="table-fixed text-left">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Transaction Number</th>
                    <th>Status</th>
                    <th>Topup</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {userById &&
                    userById.data.Transactions.map((e, i) => {
                      return (
                        <tr className="pt-4" key={i}>
                          <td>{i + 1}.</td>
                          <td>{e.transactionNumber}</td>
                          <td>{e.status}</td>
                          <td>{formatRupiah(e.price)}</td>
                          <td>{e.updatedAt.split("T")[0]}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
            <div className="flex flex-col w-full px-3 py-3">
              <h1 className="text-6xl font-bold font-bosque pt-7">Watch Lot</h1>
              <div className="flex flex-row justify-between px-5 pr-14">
                <div className="flex flex-col justify-end items-baseline"></div>
              </div>
              {/* <div className="grid grid-cols-4 grid-flow-row p-5 space-x-2 space-y-8 items-baseline">
                {lots.map((lot, index) => {
                  return (
                    <LotCard
                      key={lot.id}
                      lot={lot}
                      lotNumber={offset + index + 1}
                    />
                  );
                })}
              </div> */}
              <div className="collapse collapse-arrow border-2 border-[#675237] rounded-box mt-5 pl-5 py-4 shadow-sm overflow-visible">
                <table className="table-fixed text-left">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Name</th>
                      <th>Status</th>
                      <th>Last Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lots &&
                      lots.map((e, i) => {
                        if (bidList.includes(e.lotId)) {
                          return;
                        }
                        bidList.push(e.lotId);
                        return (
                          <tr className="pt-4" key={i}>
                            <td>{i + 1}.</td>
                            <td>{e.lotName}</td>
                            <td>{checkIsHighest(e)}</td>
                            <td>{highestPrice(e)}</td>
                            <td>
                              <button
                                className="btn bg-[#702F13] text-[#ebd7bb] border-0 hover:bg-[#451D0C]"
                                onClick={() => navigate(`/lot/${e.lotId}`)}
                              >
                                Detail
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
              {/* <div className="flex flex-row justify-center">
                <div className="btn-group">
                  <button
                    className="btn bg-[#ebd7bb] border-[#57240f] text-[#57240f]  hover:bg-[#451D0C] hover:text-[#ebd7bb] text-xl"
                    onClick={handlePrev}
                  >
                    «
                  </button>
                  <button className="btn border-y-2 border-x-0 bg-[#ebd7bb] border-[#57240f] text-[#57240f]  hover:bg-[#ebd7bb]">
                    Page {pageNumber}
                  </button>
                  <button
                    className="btn bg-[#ebd7bb] border-l-0 border-[#57240f] text-[#57240f]  hover:bg-[#451D0C] hover:text-[#ebd7bb]"
                    onClick={handleNext}
                  >
                    »
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
