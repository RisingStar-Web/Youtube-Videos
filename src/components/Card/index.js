import React, { useState } from "react";
import dayjs from "dayjs";
import DropDown from "../DropDown";
import Button from "../Button";

export default function Video({ data }) {
  const { snippet } = data;
  const { title, channelTitle, publishedAt, thumbnails } = snippet;
  const imageUrl = thumbnails.medium.url;
  let PreviewTimeout;
  const [activePreview, setActivePreview] = useState(false);

  const showPreview = () => {
    PreviewTimeout = setTimeout(() => {
      setActivePreview(true);
    }, 600);
  };

  const hidePreview = () => {
    setActivePreview(false);
    clearInterval(PreviewTimeout);
  };
  return (
    <div className={`relative ${activePreview ? "z-10" : ""}`}>
      <div
        className={`border-0 flex flex-col bg-gray-800 shadow-md rounded-md ${
          activePreview ? "absolute scale-125 transition" : ""
        }`}
        onMouseLeave={hidePreview}
      >
        <div className="relative group" onMouseEnter={showPreview}>
          <img src={imageUrl} className="w-full card-img-top" />
          {!activePreview && (
            <div className="group-hover:opacity-100 opacity-0 absolute bottom-2 right-2 bg-gray-800 p-2 text-white text-sm">
              Keep hovering to play
            </div>
          )}
        </div>
        <div className="group p-5 flex justify-start items-start flex-col relative">
          <p className="text-white font-semibold text-left">{title}</p>
          <p className="text-gray-400 text-left mt-3 text-sm">{channelTitle}</p>
          {/* <p className="text-left">{description}</p> */}
          <p className="text-gray-400 text-left text-sm">
            {dayjs(publishedAt).format("DD/MM/YYYY")}
          </p>

          <DropDown className="group-hover:opacity-100 opacity-0" />
        </div>
        {activePreview && (
          <div className="grid gap-3 px-5 pb-5">
            <Button>Watch later</Button>
            <Button>Add to queue</Button>
          </div>
        )}
      </div>
      {/* {activePreview && <PreviewCard />} */}
    </div>
  );
}
