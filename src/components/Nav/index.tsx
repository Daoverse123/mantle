import React from "react";

function Nav() {
  return (
    <div
      className="mt-[70px] max-[1320px]:mt-[33px] mb-[0] flex
       w-[1300px] max-[1320px]:w-[95%] h-[100px] max-[425px]:64px outline outline-white m-auto rounded-[36px] px-[34px] items-center"
    >
      <picture
        onClick={() => {
          const newTab = window.open("https://truts.xyz", "_blank");
          newTab?.focus(); // Optional: Set focus on the new tab
        }}
      >
        <img
          className="w-[255px] object-contain max-[940px]:w-[170px] cursor-pointer"
          src="/logo.svg"
          alt=""
        />
      </picture>

      {/* <ul className="flex gap-8 mx-auto max-[940px]:hidden">
        {["Add a Community", "Discover Communities"].map((ele, idx) => {
          return (
            <li className={"text-white font-medium text-base"} key={ele + idx}>
              {ele}
            </li>
          );
        })}
      </ul> */}
      {/* <button className="max-[940px]:hidden bg-gradient-to-r from-teal-500 to-cyan-300 text-white px-7 py-2  rounded-3xl">
        Get Started
      </button> */}
    </div>
  );
}

export default Nav;
