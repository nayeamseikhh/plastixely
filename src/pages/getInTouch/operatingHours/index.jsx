// const OperatingHours = () => {
//   return (
//     <div className="overflow-x-auto">
//       <table className="w-full border-2 border-black border-collapse text-center">
//         <thead>
//           <tr>
//             <th className="border-2 border-black px-6 py-5 text-2xl font-bold underline">
//               Operating Day(s)
//             </th>

//             <th className="border-2 border-black px-6 py-5">
//               <h2 className="text-2xl font-bold underline">
//                 FD PLASTIX, TOOLZ & SPAREZ LTD
//               </h2>

//               <p className="mt-2 text-xl font-semibold underline">
//                 Customer Service Phone Line
//               </p>
//             </th>
//           </tr>
//         </thead>

//         <tbody>
//           <tr>
//             <td className="border-2 border-black py-8 text-2xl italic font-semibold">
//               Monday - Friday
//             </td>

//             <td className="border-2 border-black py-8 text-xl">
//               9:00 AM - 6:00 PM
//             </td>
//           </tr>

//           <tr>
//             <td className="border-2 border-black py-8 text-2xl italic font-semibold">
//               Saturday
//             </td>

//             <td className="border-2 border-black py-8 text-xl">
//               10:00 AM - 4:00 PM
//             </td>
//           </tr>

//           <tr>
//             <td className="border-2 border-black py-8 text-2xl italic font-semibold">
//               Sunday
//             </td>

//             <td className="border-2 border-black py-8 text-2xl italic">
//               Closed
//             </td>
//           </tr>

//           <tr>
//             <td className="border-2 border-black py-8 text-2xl italic font-semibold">
//               Bank / Public Holiday(s)
//             </td>

//             <td className="border-2 border-black py-8 text-2xl italic">
//               Closed
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default OperatingHours;

const hours = [
  { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
  { day: "Saturday", time: "10:00 AM - 4:00 PM" },
  { day: "Sunday", time: "Closed" },
  { day: "Bank / Public Holiday(s)", time: "Closed" },
];

const OperatingHours = () => {
  return (
    <>
      {/* Mobile */}
      <div className="block md:hidden space-y-4">
        <h2 className="text-lg font-bold text-center">
          FD PLASTIX, TOOLZ & SPAREZ LTD
        </h2>

        <p className="text-center text-sm font-medium">
          Customer Service Phone Line
        </p>

        {hours.map((item, index) => (
          <div
            key={index}
            className="border-2 border-black rounded-lg p-4 shadow-sm"
          >
            <p className="font-bold">{item.day}</p>

            <p className="mt-2 text-gray-700">{item.time}</p>
          </div>
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden md:block overflow-x-auto ">
        <table className="w-full border-2 border-white border-collapse text-center">
          <thead>
            <tr>
              <th className="border-2 border-white px-6 py-5 text-2xl font-bold underline">
                Operating Day(s)
              </th>

              <th className="border-2 border-white px-6 py-5">
                <h2 className="text-2xl font-bold underline">
                  FD PLASTIX, TOOLZ & SPAREZ LTD
                </h2>

                <p className="mt-2 text-xl font-semibold underline">
                  Customer Service Phone Line
                </p>
              </th>
            </tr>
          </thead>

          <tbody>
            {hours.map((item, index) => (
              <tr key={index}>
                <td className="border-2 border-white py-8 text-2xl italic font-semibold">
                  {item.day}
                </td>

                <td className="border-2 border-white py-8 text-xl italic">
                  {item.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OperatingHours;