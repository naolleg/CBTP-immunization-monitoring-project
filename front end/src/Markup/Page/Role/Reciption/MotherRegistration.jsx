import React from "react";

function MotherRegistration() {
  return (
    <>
      <div>
        {/* <div className="myinfoHeader">
          <p>New Mother registration</p>
        </div> */}
        <div className="myinfoForm py-[20px]">
          <div className="">
            <div>
              <p className="mx-[5%] md:mx-[10%] font-semibold">Name</p>

              <div className=" md:grid md:grid-cols-2  w-[90%] md:w-[80%] mx-auto md:mt-[12px] mb-[30px]">
                <div className="">
                  <input
                    type="text"
                    placeholder="First name"
                    className="p-1 border-[1.25px] my-4 md:my-0 border-gray-200  w-[95%] outline-none"
                  />
                  <p className=" text-gray-400"></p>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="p-1 border-[1.25px] border-gray-200  w-[95%] outline-none"
                  />
                  <p className=" text-gray-400 mt-5 md:mt-0"></p>
                </div>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2  w-[90%] md:w-[80%] mx-auto mt-[20px] mb-[35px]">
              <div className="">
                <p className="mb-[10px] font-semibold">Date of Birth</p>
                <input
                  type="date"
                  className="p-1 border-[1.25px] border-gray-200  w-[95%] outline-none"
                />
              </div>
              <div>
                <p className="mb-[10px] font-semibold mt-5 md:mt-0">Gender</p>
                <select
                  name=""
                  id=""
                  className="p-1 border-[1.25px] border-gray-200  w-[95%] outline-none"
                >
                  <option value="">Select</option>
                  <option value="">Female</option>
                  <option value="">Male</option>
                </select>
              </div>
            </div>
            <div className="mt-5">
              <div className="  md:grid md:grid-cols-2  w-[90%] md:w-[80%] mx-auto ">
                <div className="">
                  <p className="mb-[10px] font-semibold">Contact Number</p>
                  <input
                    type="number"
                    className="p-1 border-[1.25px] border-gray-200  w-[95%] outline-none"
                  />
                </div>
                <div>
                  <p className="mb-[10px] font-semibold mt-5 md:mt-0">Email</p>
                  <input
                    type="email"
                    className="p-1 border-[1.25px] border-gray-200  w-[95%] outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className=" mx-[5%] md:mx-[10%] font-semibold">Address</p>
              {/* <p className="mb-[10px] mx-[10%] font-semibold">Address</p> */}
              <div className=" md:grid md:grid-cols-3  w-[90%] md:w-[80%] mx-auto mt-[10px]">
                <div className="">
                  {/* <p className="mb-[10px] font-semibold">Zone</p> */}
                  <input
                    type="number"
                    placeholder="Zone"
                    className="p-1 border-[1.25px] border-gray-200  w-[95%] outline-none"
                  />
                  {/* <p className="mb-[10px]  text-gray-400">Zone</p> */}
                </div>
                <div>
                  {/* <p className="mb-[10px] font-semibold">Wereda</p> */}
                  <input
                    type="number"
                    placeholder="Wereda"
                    className="p-1 my-4 md:my-0 border-[1.25px] border-gray-200  w-[95%] outline-none"
                  />
                  {/* <p className="mb-[10px]  text-gray-400">Wereda</p> */}
                </div>
                <div>
                  {/* <p className="mb-[10px] font-semibold">House number</p> */}
                  <input
                    type="number"
                    placeholder="House number"
                    className=" p-1 border-[1.25px] border-gray-200  w-[95%] outline-none"
                  />
                  {/* <p className="mb-[10px]  text-gray-400">House number</p> */}
                </div>
              </div>
            </div>
            <div>
              <p className="mb-[10px] mx-[5%] md:mx-[10%] font-semibold my-10 text-xl">
                In case of emergency
              </p>

              <div className="md:grid md:grid-cols-2  w-[90%] md:w-[80%] mx-auto mt-[20px]">
                <div className="">
                  <p className="mb-[10px] font-semibold">Contact number</p>
                  <input
                    type="text"
                    className="p-1 border-[1.25px] border-gray-200  w-[95%] outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MotherRegistration;
