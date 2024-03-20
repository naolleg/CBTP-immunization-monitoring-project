import React from "react";
import { useNavigate } from "react-router-dom";
function ChildInfo(props) {
const navigte=useNavigate();

const handleBack=()=>{
navigte("/motherlist")
}

  return (
    <div>
      <header className="bg-[#137E8F] text-white py-4 flex px-[2%] ">
        <button className="pe-[2%]">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.6rem"
          height="1.6rem"
          viewBox="0 0 1024 1024"
          onClick={handleBack}
          {...props}
        >
          <path
            fill="currentColor"
            d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64"
          ></path>
          <path
            fill="currentColor"
            d="m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312z"
          ></path>
        </svg>
        </button>
        
        <h1 className="text-3xl">Infant Vaccine Report</h1>
        {/* <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.6rem"
            height="1.6rem"
            viewBox="0 0 24 24"
            {...props}
            onClick={props.closeModal}
          >
            <path
              fill="currentColor"
              d="m4 10l-.354.354L3.293 10l.353-.354zm16.5 8a.5.5 0 0 1-1 0zM8.646 15.354l-5-5l.708-.708l5 5zm-5-5.708l5-5l.708.708l-5 5zM4 9.5h10v1H4zM20.5 16v2h-1v-2zM14 9.5a6.5 6.5 0 0 1 6.5 6.5h-1a5.5 5.5 0 0 0-5.5-5.5z"
            ></path>
          </svg>
        </button> */}
      </header>

      <div className="m-4">
        <div className="">
          <h2 className="text-2xl text-[#137E8F] mb-[1%]">
            Infant Information
          </h2>

          <p className="mb-[3px]">
            <strong>Full Name:</strong> Nabon grima legese
          </p>
          <p className="mb-[3px]">
            <strong>Date of Birth:</strong> January 1, 2023
          </p>
          <p className="mb-[3px]">
            <strong>Gender:</strong> Male
          </p>
          <p className="mb-[3px]">
            <strong>Blood Type:</strong> A+
          </p>
          <p className="mb-[3px]">
            <strong>Parent:</strong> Nardos{" "}
          </p>

          <h2 className="text-2xl text-[#137E8F] mt-[3%] mb-[1%]">
            Vaccine History
          </h2>

          <table className="w-full ">
            <thead>
              <tr>
                <td className="bg-gray-200 py-2 font-bold">Vaccine</td>
                <td className="bg-gray-200 py-2 font-bold">Date</td>
                <td className="bg-gray-200 py-2 font-bold">
                  Healthcare Provider
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>DTaP</td>
                <td>March 15, 2023</td>
                <td>Dr. Smith</td>
              </tr>
              <tr>
                <td>Hib</td>
                <td>April 2, 2023</td>
                <td>Dr. Johnson</td>
              </tr>
              <tr>
                <td>PCV</td>
                <td>April 2, 2023</td>
                <td>Dr. Johnson</td>
              </tr>
              <tr>
                <td>Rotavirus</td>
                <td>May 1, 2023</td>
                <td>Dr. Smith</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-2xl text-[#137E8F] mt-[5%] mb-[1%]">
            Additional Information
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            feugiat mauris sit amet ex tempor, at condimentum mi facilisis.
            Suspendisse potenti. Nullam auctor sapien non lacus feugiat, id
            consectetur elit auctor. Phasellus justo risus, ultrices nec
            placerat non, pellentesque in ipsum. Etiam sit amet augue euismod,
            cursus metus sed, sagittis ligula. Sed auctor, quam et sodales
            cursus, tortor ligula cursus enim, non consectetur lorem urna et
            nulla.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChildInfo;
