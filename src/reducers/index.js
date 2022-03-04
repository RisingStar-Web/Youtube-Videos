export const videoReducer = (state, action) => {
  switch (action.type) {
    case "STACK_VIDEOS":
      return { ...state, videos: state.videos.concat(action.videos) };
    case "FETCHING_VIDEOS":
      return { ...state, fetching: action.fetching };
    default:
      return state;
  }
};
export const pageReducer = (state, action) => {
  switch (action.type) {
    case "ADVANCE_PAGE":
      return { ...state, nextPageToken: action.nextPageToken };
    case "NEXT_PAGE":
      return { ...state, pageToken: state.nextPageToken };
    default:
      return state;
  }
};
