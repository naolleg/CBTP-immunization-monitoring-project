import React, { useState } from "react";
function Profile(props) {




  return (
    <>
      <div className="md:flex h-screen">
        <div className="left bg-[#137E8F] md:w-[26%] lg:w-[25%] hidden md:block">
          <p className="text-white pt-24 text-[2xl] md:text-4xl px-3 ">
            Immunization Monitoring System
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="130px
"
            height="165px"
            viewBox="0 0 26 26"
            {...props}
            className="mt-16 ms-6"
          >
            <g fill="none" fillRule="evenodd">
              <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
              <path
                fill="white"
                d="M20 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2H4v14h16zm-3 10a1 1 0 0 1 .117 1.993L17 17H7a1 1 0 0 1-.117-1.993L7 15zm-7-8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm7 4a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2zm-7-2H8v2h2zm7-2a1 1 0 0 1 .117 1.993L17 9h-3a1 1 0 0 1-.117-1.993L14 7z"
              ></path>
            </g>
          </svg>{" "}
        </div>
        <div className="right bg-white w-[75%] mx-auto pt-16">
          <p className=" text-3xl px-3 text-center md:hidden font-bold mb-10">
            Immunization Monitoring System
          </p>
          <div className="w-4/5 max-w-md bg-white px-8 py-6 shadow-lg rounded-lg mx-auto">
            <div
              variant="h5"
              className="text-[#137E8F] flex justify-center text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150px"
                height="150px"
                viewBox="0 0 56 56"
                {...props}
              >
                <path
                  fill="#137E8F"
                  d="M28.012 28.023c5.578 0 10.125-4.968 10.125-11.015c0-6-4.5-10.711-10.125-10.711c-5.555 0-10.125 4.805-10.125 10.758c.023 6.023 4.57 10.968 10.125 10.968m0-3.539c-3.422 0-6.352-3.28-6.352-7.43c0-4.077 2.883-7.218 6.352-7.218c3.515 0 6.351 3.094 6.351 7.172c0 4.148-2.883 7.476-6.351 7.476m-14.719 25.22h29.438c3.89 0 5.742-1.173 5.742-3.75c0-6.142-7.735-15.024-20.461-15.024c-12.727 0-20.485 8.883-20.485 15.023c0 2.578 1.852 3.75 5.766 3.75m-1.125-3.54c-.61 0-.867-.164-.867-.656c0-3.844 5.953-11.04 16.71-11.04c10.759 0 16.688 7.196 16.688 11.04c0 .492-.234.656-.843.656Z"
                ></path>
              </svg>{" "}
            </div>

            <div className="flex justify-center ">
              <div className="">
                <p className="text-[#137E8F] text-2xl font-semibold text-center my-4">
                  Profile
                </p>
                <div className="">
                  <table className=" gap-5">
                    <tr className="">
                      <td className="text-[#137E8F] font-medium pe-10 ">
                        Username
                      </td>
                      <td className="text-[#2A93A4]">naolleg23</td>
                    </tr>
                    <tr>
                      <td className="text-[#137E8F] font-medium">Role</td>
                      <td className="text-[#2A93A4]">parent</td>
                    </tr>
                    <tr>
                      <td className="text-[#137f8f] font-medium">Fullname</td>
                      <td className="text-[#2A93A4]">Naol Legesse</td>
                    </tr>
                    <tr>
                      <td className="text-[#137E8F] font-medium">Phone</td>
                      <td className="text-[#2A93A4]">+251966490817</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
