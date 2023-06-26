"use client";
import React, { useState } from "react";
import { FilterButton } from "@/components/ui/Button";
import ordersDoctorAPI from "@/api/all-order";

import { TabelKomisi } from "@/components/ui/Table";

function Page() {
   const { doctorOrders } = ordersDoctorAPI();
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   const orders = doctorOrders ? doctorOrders.data : [];
   const handleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
   };

   return (
      <>
         <div className=" max-w-[1440px] mx-auto px-[32px] bg-neutral-10 pt-[50px]">
            <h1 className="text-inter text-xl text-white font-bold  mb-[20px] bg-web-green-300 py-4 px-5 rounded-lg">
               Riwayat Komisi
            </h1>
            <FilterButton onClick={handleDropdown}>Filter Data</FilterButton>
            <div className="relative">
               {isDropdownOpen && (
                  <div className="absolute z-10  bg-neutral-20  left-52 -top-20  rounded-3xl px-7 py-7">
                     <p className="font-bold  text-md">Filter</p>
                     <div className="flex items-center  gap-7 mt-3">
                        <div className=" py-3 px-10 flex rounded-xl  items-center flex-col gap-2 cursor-pointer  bg-neutral-40">
                           <svg
                              width="25"
                              height="24"
                              viewBox="0 0 25 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <g id="uil:calender">
                                 <path
                                    id="Vector"
                                    d="M19.5 4H17.5V3C17.5 2.73478 17.3946 2.48043 17.2071 2.29289C17.0196 2.10536 16.7652 2 16.5 2C16.2348 2 15.9804 2.10536 15.7929 2.29289C15.6054 2.48043 15.5 2.73478 15.5 3V4H9.5V3C9.5 2.73478 9.39464 2.48043 9.20711 2.29289C9.01957 2.10536 8.76522 2 8.5 2C8.23478 2 7.98043 2.10536 7.79289 2.29289C7.60536 2.48043 7.5 2.73478 7.5 3V4H5.5C4.70435 4 3.94129 4.31607 3.37868 4.87868C2.81607 5.44129 2.5 6.20435 2.5 7V19C2.5 19.7956 2.81607 20.5587 3.37868 21.1213C3.94129 21.6839 4.70435 22 5.5 22H19.5C20.2956 22 21.0587 21.6839 21.6213 21.1213C22.1839 20.5587 22.5 19.7956 22.5 19V7C22.5 6.20435 22.1839 5.44129 21.6213 4.87868C21.0587 4.31607 20.2956 4 19.5 4ZM20.5 19C20.5 19.2652 20.3946 19.5196 20.2071 19.7071C20.0196 19.8946 19.7652 20 19.5 20H5.5C5.23478 20 4.98043 19.8946 4.79289 19.7071C4.60536 19.5196 4.5 19.2652 4.5 19V12H20.5V19ZM20.5 10H4.5V7C4.5 6.73478 4.60536 6.48043 4.79289 6.29289C4.98043 6.10536 5.23478 6 5.5 6H7.5V7C7.5 7.26522 7.60536 7.51957 7.79289 7.70711C7.98043 7.89464 8.23478 8 8.5 8C8.76522 8 9.01957 7.89464 9.20711 7.70711C9.39464 7.51957 9.5 7.26522 9.5 7V6H15.5V7C15.5 7.26522 15.6054 7.51957 15.7929 7.70711C15.9804 7.89464 16.2348 8 16.5 8C16.7652 8 17.0196 7.89464 17.2071 7.70711C17.3946 7.51957 17.5 7.26522 17.5 7V6H19.5C19.7652 6 20.0196 6.10536 20.2071 6.29289C20.3946 6.48043 20.5 6.73478 20.5 7V10Z"
                                    fill="black"
                                 />
                              </g>
                           </svg>
                           <p className="text-neutral-900 text-xs">Calender</p>
                        </div>
                     </div>
                  </div>
               )}
            </div>

            <TabelKomisi orders={orders} />
         </div>
      </>
   );
}

export default Page;
