import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetail } from "../store/actions/User";
import { useParams } from "react-router";
import formatRupiah from "../helpers/formatPrice";
import Loading from "./Loading";

export default function ProfileView() {

  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(fetchUserDetail(id))
  }, [id]);

  const { userById, isLoading } = useSelector((state) => state.userReducer)
  // console.log(userById);


  return (
    <div className="flex flex-col justify-between pt-10">
      <Navbar />
      <div className="w-[80vw] mx-auto my-10 min-h-[64vh]">
        <div className="flex flex-row h-full">
          <div className="w-1/2 flex flex-col">
            <div className="w-1/2 flex flex-col">
              <div className="text-left flex flex-row justify-between">
                <div className="w-2/3">
                  {userById && <h1 className="text-6xl font-bold font-bosque">
                    {userById.data.username}
                  </h1>}
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
                      <td>:</td>
                      {userById && <td>{userById.data.email}</td>}
                    </tr>
                    <tr>
                      <td>Balance</td>
                      <td >:</td>
                      {userById && <td>{formatRupiah(userById.data.balance)}</td>}
                    </tr>
                    <tr>
                      <td>Spent</td>
                      <td >:</td>
                      {userById && <td>{formatRupiah(userById.data.balanceSpent)}</td>}
                    </tr>
                    <tr>
                      <td>Actions</td>
                      <td >:</td>
                      <td>
                        <button  className="py-1 px-3 rounded-full bg-[#a35831] hover:bg-red-600 font-semi-bold text-white text-l">
                          Edit
                        </button>
                        <button className="py-1 px-3 rounded-full bg-[#a35831] hover:bg-red-600 font-semi-bold text-white text-l">
                          Topup
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                  )}
              </div>
              <div
                tabIndex="0"
                className="collapse collapse-arrow border-2 border-[#675237] rounded-box mt-5 pl-5 shadow-sm"
              >
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}