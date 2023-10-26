import React, { useEffect, useState } from "react";
import axios from "axios";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

//Components
import Sidebar from "./Sidebar";
import MissionCard from "@/components/MissionCard";

const fetchMission = async (setter: (data: any) => void) => {
  let res = await axios(
    "https://api.truts.xyz/api/v1/public/listing/64f0a01c164afac2ff358db7/missions"
  );
  if (res.status == 200) {
    setter(res.data.data.missions);
  }
};

const fetchMissionDemex = async (setter: (data: any) => void) => {
  let res = await axios(
    "https://api.truts.xyz/api/v1/public/listing/647480e6ac155b8e92a92db3/missions"
  );
  if (res.status == 200) {
    setter(res.data.data.missions);
  }
};

function MissionPage() {
  const [data, setdata] = useState<null | any>(null);
  const [demaxdata, setdemaxdata] = useState<null | any>(null);

  useEffect(() => {
    fetchMission((data) => {
      setdata(data);
    });
    fetchMissionDemex((data) => {
      setdemaxdata(data);
    });
  }, []);
  console.log(data);
  return (
    <section
      className={`${montserrat.className} flex flex-col w-full max-w-[1300px] mx-auto pt-[64px] pl-2`}
    >
      <div
        className={`text-white flex flex-col max-[670px]:items-center max-[425px]:items-start max-[425px]:w-full max-[425px]:px-2`}
      >
        <span className="flex flex-col max-[670px]:items-center max-[425px]:items-start">
          <h1 className="text-[40px] max-[670px]:text-[24px] max-[320px]:text-[20px]">
            MANTLE Partner Missions
          </h1>
          {/* <p className="text-[20px] text-[#A4A9B6] max-[670px]:text-[16px] max-[320px]:text-[14px]">
            Mantle missions description
          </p> */}
        </span>
      </div>

      {data ? (
        <div className="flex w-full outline">
          <Sidebar />
          <div className="flex flex-col ml-[34px] w-full max-[670px]:mt-0 max-[425px]:ml-0  max-[425px]:px-2">
            <span className="mt-14 flex flex-col w-full max-[425px]:items-start">
              <h3 className="gradText text-lg font-medium mb-4">Mantle</h3>
              <span className="flex w-full flex-wrap gap-3 mb-4 max-[425px]:justify-center">
                {data &&
                  data.map((dt: any, idx: number) => {
                    return <MissionCard data={dt} key={idx + "card"} />;
                  })}
              </span>
            </span>
            {/* demex */}
            <span className="mt-14 flex flex-col w-full mb-16 border-b border-b-[#a4a9b6a1]  max-[425px]:items-start">
              <h3 className="gradText text-lg font-medium mb-4">Demex</h3>
              <span className="flex w-full flex-wrap gap-3 mb-4 max-[425px]:justify-center">
                {demaxdata &&
                  demaxdata.map((dt: any, idx: number) => {
                    return <MissionCard data={dt} key={idx + "card"} />;
                  })}
              </span>
            </span>
          </div>
        </div>
      ) : (
        <div className="flex w-full">
          <div
            className="flex flex-col w-full h-28 justify-start items-center pt-16"
            role="status"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 100 101"
            >
              <path
                fill="currentColor"
                d="M100 50.59c0 27.615-22.386 50.001-50 50.001s-50-22.386-50-50 22.386-50 50-50 50 22.386 50 50zm-90.919 0c0 22.6 18.32 40.92 40.919 40.92 22.599 0 40.919-18.32 40.919-40.92 0-22.598-18.32-40.918-40.919-40.918-22.599 0-40.919 18.32-40.919 40.919z"
              ></path>
              <path
                fill="currentFill"
                d="M93.968 39.04c2.425-.636 3.894-3.128 3.04-5.486A50 50 0 0041.735 1.279c-2.474.414-3.922 2.919-3.285 5.344.637 2.426 3.12 3.849 5.6 3.484a40.916 40.916 0 0144.131 25.769c.902 2.34 3.361 3.802 5.787 3.165z"
              ></path>
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </section>
  );
}

export default MissionPage;
