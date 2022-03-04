import React, { useReducer, useRef } from "react";
import Card from "../Card";
import { pageReducer, videoReducer } from "../../reducers";
import { useFetch, useInfiniteScroll } from "../../hooks";
import Loading from "../Loading";

export default function Videos() {
  const [pager, pagerDispatch] = useReducer(pageReducer, {
    pageToken: "",
    nextPageToken: "",
  });
  const [videoData, videoDispatch] = useReducer(videoReducer, {
    videos: [],
    fetching: true,
  });

  let bottomBoundaryRef = useRef(null);
  useFetch(pager, videoDispatch, pagerDispatch);
  useInfiniteScroll(bottomBoundaryRef, pagerDispatch);
  return (
    <div className="px-6 pt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {videoData.videos &&
          videoData.videos?.map((video, index) => (
            <Card data={video} key={index} />
          ))}
      </div>
      {videoData?.fetching && <Loading />}
      <div
        id="page-bottom-boundary"
        style={{ border: "1px solid red" }}
        ref={bottomBoundaryRef}
      ></div>
    </div>
  );
}
