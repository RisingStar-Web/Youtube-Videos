import { useEffect, useCallback, useRef } from "react";

// make API calls and pass the returned data via dispatch
export const useFetch = (data, videoDispatch, pagerDispatch) => {
  useEffect(() => {
    videoDispatch({ type: "FETCHING_VIDEOS", fetching: true });
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&pageToken=${data.pageToken}&type=video&maxResults=12&q=programming&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    )
      .then((data) => data.json())
      .then((res) => {
        videoDispatch({ type: "STACK_VIDEOS", videos: res.items });
        videoDispatch({ type: "FETCHING_VIDEOS", fetching: false });
        pagerDispatch({
          type: "ADVANCE_PAGE",
          nextPageToken: res.nextPageToken,
        });
      })
      .catch((e) => {
        // handle error
        videoDispatch({ type: "FETCHING_VIDEOS", fetching: false });
        return e;
      });
  }, [videoDispatch, pagerDispatch, data.pageToken]);
};

// infinite scrolling with intersection observer
export const useInfiniteScroll = (scrollRef, dispatch) => {
  const scrollObserver = useCallback(
    (node) => {
      new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.intersectionRatio > 0) {
            dispatch({ type: "NEXT_PAGE" });
          }
        });
      }).observe(node);
    },
    [dispatch]
  );

  useEffect(() => {
    if (scrollRef.current) {
      scrollObserver(scrollRef.current);
    }
  }, [scrollObserver, scrollRef]);
};
