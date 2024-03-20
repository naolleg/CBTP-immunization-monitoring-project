import React from "react";

function Footer(props) {
  return (
    <>
      <div class="bg-[#137E8F] text-center  text-black mt-10">
        <div class="container mx-auto py-8 px-4 ">
          <div class="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
            <div class="mb-3">
              <h4 class="text-xl font-semibold mb-4">Vaccination</h4>
              <ul class="list-none">
                <li>
                  <a href="#" class="bg-[#137E8F] hover:text-gray-400">
                    About Vaccines
                  </a>
                </li>
                <li>
                  <a href="#" class="bg-[#137E8F] hover:text-gray-400">
                    Vaccine Types
                  </a>
                </li>
                <li>
                  <a href="#" class="bg-[#137E8F] hover:text-gray-400">
                    Vaccination Process
                  </a>
                </li>
                <li>
                  <a href="#" class="bg-[#137E8F] hover:text-gray-400">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div class="mb-3">
              <h4 class="text-xl font-semibold mb-4">Get Vaccinated</h4>
              <ul class="list-none">
                <li>
                  <a href="#" class="bg-[#137E8F] hover:text-gray-400">
                    Schedule Appointment
                  </a>
                </li>
                <li>
                  <a href="#" class="bg-[#137E8F] hover:text-gray-400">
                    Vaccination Centers
                  </a>
                </li>
                <li>
                  <a href="#" class="bg-[#137E8F] hover:text-gray-400">
                    Vaccine Eligibility
                  </a>
                </li>
                <li>
                  <a href="#" class="bg-[#137E8F] hover:text-gray-400">
                    Vaccine Safety
                  </a>
                </li>
              </ul>
            </div>
            <div class="mb-3">
              <h4 class="text-xl font-semibold mb-4">Resources</h4>
              <ul class="list-none">
                <li>
                  <a href="#" class="bg-[#137E8F] hover:text-gray-400">
                    Vaccine Research
                  </a>
                </li>
                <li>
                  <a href="#" class="bg-[#137E8F] hover:text-gray-400">
                    Side Effects
                  </a>
                </li>
                <li>
                  <a href="#" class="bg-[#137E8F] hover:text-gray-400">
                    Public Health Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" class="bg-[#137E8F] hover:text-gray-400">
                    News and Updates
                  </a>
                </li>
              </ul>
            </div>
            <div class="mb-3 mx-auto">
              <h4 class="text-xl font-semibold mb-4">Connect</h4>
              <ul class="flex list-none">
                <li class="mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.4rem"
                    height="1.4rem"
                    viewBox="0 0 24 24"
                    className="cursor-pointer"
                    {...props}
                  >
                    <path
                      fill="currentColor"
                      d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                    ></path>
                  </svg>
                </li>
                <li class="mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.4rem"
                    height="1.4rem"
                    viewBox="0 0 24 24"
                    className="cursor-pointer"
                    {...props}
                  >
                    <path
                      fill="currentColor"
                      d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
                    ></path>
                  </svg>
                </li>
                <li class="mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.4rem"
                    height="1.4rem"
                    viewBox="0 0 24 24"
                    {...props}
                    className="cursor-pointer"
                  >
                    <path
                      fill="currentColor"
                      d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                    ></path>
                  </svg>
                </li>
              </ul>
            </div>
          </div>
          <hr class="border-gray-800 my-2" />
          <div class="flex items-center justify-between">
            <p class="text-sm">
              &copy; 2024 Vaccination Center. All rights reserved.
            </p>
            <ul class="flex list-none">
              <li class="mr-4">
                <a href="#" class="bg-[#137E8F] hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="bg-[#137E8F] hover:text-gray-400">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
