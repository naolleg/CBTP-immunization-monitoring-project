import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import ChildRegstration from "./ChildRegstration";

function MotherList(props) {
  // const handleClick = (event) => {
  //     const selectedValue = event.target.value;
  //     if (selectedValue === 'naol') {
  //       navigate('/childinfo');
  //     }
  //   };
  const [isOpen, setIsOpen] = useState(false);


  ///Pop up
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handelinfo = () => {
    navigate("/childinfo");
  };
  const handleProfile = () => {
    navigate("/profile");
  };
  // const handleAddChild=()=>{
  //   navigate('/childRegistration');
  // }
  return (
    <>
      <div className="mx-[3%] my-[2%]">
        <p className="mx-[5%] text-3xl my-10">Mother List</p>
        <div className="overflow-x-auto bg-white ">
          <div className="relative m-[2px] mb-3 mr-5 float-left">
            <label for="inputSearch" className="sr-only">
              Search{" "}
            </label>
            <input
              id="inputSearch"
              type="text"
              placeholder="Search..."
              className="block w-64 rounded-lg border  py-2 pl-10 pr-4 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-4 w-4 text-neutral-500 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </span>
          </div>

          <div className="relative m-[2px] mb-3 float-right hidden sm:block">
            <label for="inputFilter" className="sr-only">
              Filter
            </label>
            <select
              id="inputFilter"
              className="block w-40 rounded-lg border p-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
            >
              <option value="1" selected>
                Last week
              </option>
              <option value="2">Last month</option>
              <option value="3">Yesterday</option>
              <option value="4">Last 7 days</option>
              <option value="5">Last 30 days</option>
            </select>
          </div>

          <table className="min-w-full text-left text-sm whitespace-nowrap">
            <thead className="uppercase tracking-wider border-b-2 ">
              <tr>
                <th scope="col" className="px-6 py-4">
                  Mother Name
                </th>
                <th scope="col" className="px-6 py-4">
                  User name
                </th>
                <th scope="col" className="px-6 py-4"></th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b ">
                <td scope="row" className="px-6 py-4 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.2rem"
                    height="1.2rem"
                    viewBox="0 0 24 24"
                    {...props}
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0"
                    ></path>
                  </svg>
                  <p
                    className="pt-[1px] cursor-pointer transition-all duration-500 ease-in-out overflow-hidden"
                    onClick={handleProfile}
                  >
                    Mahlet Teklu
                  </p>
                </td>
                <td className="px-6 py-4">seli_12</td>
                <td>
                  <button className="me-3">
                    <div class=" mb-1 w-full rounded-lg  shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)]  p-3">
                      <div
                        className="bg-[#137E8F] flex  gap-4 p-2 text-white outline-none transition-all duration-300 ease-out hover:ease-in rounded-lg"
                        onClick={handleClick}
                      >
                        <h4 className="  text-white ">List Child</h4>
                        <svg
                          className={
                            !open ? "openFaq1 " : "openFaq1 rotate-180"
                          }
                          width="18"
                          height="18"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 15.675C10.7937 15.675 10.6219 15.6062 10.45 15.4687L2.54374 7.69998C2.23436 7.3906 2.23436 6.90935 2.54374 6.59998C2.85311 6.2906 3.33436 6.2906 3.64374 6.59998L11 13.7844L18.3562 6.53123C18.6656 6.22185 19.1469 6.22185 19.4562 6.53123C19.7656 6.8406 19.7656 7.32185 19.4562 7.63123L11.55 15.4C11.3781 15.5719 11.2062 15.675 11 15.675Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>

                      <div
                        className={`transition-all duration-500 ease-in-out overflow-hidden ${
                          !open
                            ? "max-h-0"
                            : "max-h-[200px]  text-base leading-relaxed text-body-color"
                        }`}
                      >
                        <ul>
                          <li onClick={handelinfo}>Nabon Grima</li>
                          <li onClick={handelinfo}>Naol Legese</li>
                        </ul>
                      </div>
                    </div>
                  </button>
                  <button
                    className="bg-[#137E8F]  p-2 text-white ms-2 hover:bg-[#265056] rounded-lg "
                    onClick={openModal}
                  >
                    Add Child
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Child Registration Modal"
          className="fixed inset-0 flex items-center justify-center "
          overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-55"
        >

          <ChildRegstration closeModal={closeModal} />
          
        </Modal>
      </div>
    </>
  );
}

export default MotherList;