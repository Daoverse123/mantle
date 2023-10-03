import React from "react";
import Coin from "./Coin";
import Chip from "./Chip";

function MissionCard({ data }: { data: any }) {
  return (
    <div
      onClick={() => {
        const newTab = window.open(
          "https://truts.xyz/mission/" + data._id,
          "_blank"
        );
        newTab?.focus(); // Optional: Set focus on the new tab
      }}
      className=" text-white flex flex-col w-[313px] max-[425px]:w-[95%] h-[274px] rounded-2xl border border-[#CACDD5] cursor-pointer"
    >
      <div className="p-4">
        <picture>
          <img
            className="w-[59px] h-[59px] object-cover rounded-full"
            src={data.listing.photo.logo.secure_url}
            alt=""
          />
        </picture>
        <span>
          <p className="text-xs m-0 mt-2">Mantle</p>
          <h3 className="text-lg m-0 mt-1 gradText font-semibold">
            {data.name}
          </h3>
          <p className="text-sm font-normal m-0 mt-1 mb-2">
            {limitTextWords(data.description, 12)}
          </p>
          <Chip />
        </span>
      </div>
      <span className="p-4 flex items-center w-full border-t border-t-[#EEEFF2] mt-auto">
        <Coin />
        <p className="text-base ml-2 gradText font-semibold">
          {data.listingXP} XP
        </p>
      </span>
    </div>
  );
}

function limitTextWords(text: string, limit: number) {
  // Split the text into words using whitespace as a delimiter
  const words = text.split(/\s+/);

  // Check if the number of words is greater than the limit
  if (words.length > limit) {
    // If it is, slice the array to get only the first 'limit' words
    words.length = limit;
    return words.join(" ") + "..."; // Add ellipsis for indication
  }

  // If the number of words is less than or equal to the limit, return the original text
  return text;
}

export default MissionCard;
