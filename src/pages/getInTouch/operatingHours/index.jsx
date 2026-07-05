const OperatingHours = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-2 border-black border-collapse text-center">
        <thead>
          <tr>
            <th className="border-2 border-black px-6 py-5 text-2xl font-bold underline">
              Operating Day(s)
            </th>

            <th className="border-2 border-black px-6 py-5">
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
          <tr>
            <td className="border-2 border-black py-8 text-2xl italic font-semibold">
              Monday - Friday
            </td>

            <td className="border-2 border-black py-8 text-xl">
              9:00 AM - 6:00 PM
            </td>
          </tr>

          <tr>
            <td className="border-2 border-black py-8 text-2xl italic font-semibold">
              Saturday
            </td>

            <td className="border-2 border-black py-8 text-xl">
              10:00 AM - 4:00 PM
            </td>
          </tr>

          <tr>
            <td className="border-2 border-black py-8 text-2xl italic font-semibold">
              Sunday
            </td>

            <td className="border-2 border-black py-8 text-2xl italic">
              Closed
            </td>
          </tr>

          <tr>
            <td className="border-2 border-black py-8 text-2xl italic font-semibold">
              Bank / Public Holiday(s)
            </td>

            <td className="border-2 border-black py-8 text-2xl italic">
              Closed
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OperatingHours;