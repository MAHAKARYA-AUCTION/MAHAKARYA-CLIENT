// import { useForm } from "react-hook-form";

// export function EditProfile() {
  
//   const preloadedValues = {
//     username: `${userById.data.username}`,
//     email: `${userById.data.email}`,
//     phoneNumber: `${userById.data.phoneNumber}`,
//     address: `${userById.data.address}`,
//     // username: "a",
//     // email: 'a',
//     // phoneNumber: "a",
//     // address: "a",
//   }

//   const { register, handleSubmit } = useForm({
//     defaultValues: preloadedValues
//   });

//   return (
//     <div>
//       <div
//         className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
//       >
//         <div
//           className="relative my-6 mx-auto w-11/12 max-w-xl h-fit font-encode bg-[#ebd7bb] rounded-xl text-slate-900"
//         >
//           <button
//             className="px-3 py-1 rounded-full absolute right-4 top-4 bg-[#57240f] hover:bg-[#451D0C] text-[#ebd7bb] text-xl font-encode"
//             onClick={() => setShowEdit(false)}
//           >
//             X
//           </button>
//           <div className="w-full px-4 mt-8 flex flex-col justify-center items-center">
//             <p className="text-2xl font-semibold">Edit Your Profile</p>
//             <form
//               className="w-full flex flex-col mt-12 px-16 pb-16"
//               onSubmit={handleSubmit(onSubmitEdit)}
//             >
//               <label
//                 htmlFor="username"
//                 className="py-2 pl-4 text-md font-semibold font-encode"
//               >
//                 username
//               </label>
//               <input
//                 type="username"
//                 className="w-full px-8 py-4 text-md font-encode border border-slate-500 rounded-full"
//                 name="username"
//                 {...register("username")}
//               />
//               <label
//                 htmlFor="email"
//                 className="py-2 pl-4 text-md font-semibold font-encode"
//               >
//                 email
//               </label>
//               <input
//                 type="text"
//                 className="w-full px-8 py-4 text-md font-encode border border-slate-500 rounded-full"
//                 name="email"
//                 {...register("email")}
//               />
//               <label
//                 htmlFor="password"
//                 className="py-2 pl-4 text-md font-semibold font-encode"
//               >
//                 password
//               </label>
//               <input
//                 type="password"
//                 className="w-full px-8 py-4 text-md font-encode border border-slate-500 rounded-full"
//                 name="password"
//                 {...register("password")}
//               />
//               <label
//                 htmlFor="password"
//                 className="py-2 pl-4 text-md font-semibold font-encode"
//               >
//                 confirm password
//               </label>
//               <input
//                 type="password"
//                 className="w-full px-8 py-4 text-md font-encode border border-slate-500 rounded-full"
//                 name="password"
//                 {...register("currentPassword")}
//               />
//               <label
//                 htmlFor="phoneNumber"
//                 className="py-2 pl-4 text-md font-semibold font-encode"
//               >
//                 Phone Number
//               </label>
//               <input
//                 type="text"
//                 className="w-full px-8 py-4 text-md font-encode border border-slate-500 rounded-full"
//                 name="phoneNumber"
//                 {...register("phoneNumber")}
//               />
//               <label
//                 htmlFor="address"
//                 className="py-2 pl-4 text-md font-semibold font-encode"
//               >
//                 address
//               </label>
//               <input
//                 type="text"
//                 className="w-full px-8 py-4 text-md font-encode border border-slate-500 rounded-full"
//                 name="address"
//                 {...register("address")}
//               />
//               <button
//                 type="submit"
//                 className="bg-[#57240f] hover:bg-[#451D0C] text-[#ebd7bb] text-xl leading-6 font-medium py-5 px-6 mt-12 rounded-lg"
//               >
//                 Edit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
//     </div>
//   )
// }