import { useTranslation } from "react-i18next";

const SearchBox = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <div className="grid grid-cols-1 items-center">
          <input
            type="text"
            name=""
            id=""
            placeholder={t("searchProducts")}
            className="flex gap-x-5 h-10 w-full bg-white01 rounded-2xl items-center pl-5 text-black"
          />
          {/* <div className="flex gap-x-5 h-10 w-full bg-white01 rounded-2xl items-center pl-5">
            <div className=" text-white02">
              <FaSearch size={20} />
            </div>
            <p className="text-white02 font-poppins">Search For products...</p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SearchBox;
