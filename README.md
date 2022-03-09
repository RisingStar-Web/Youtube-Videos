Create a React app that mimics YouTube's homepage video grid list UI (highlighted in red in the screenshot below). Feel free to add other YouTube UI elements such as the header and the side drawer if you want to, but they're not required.


Pay attention to the details of the UI elements, such as animations and tooltips or video popup when hovering the mouse over things. For this video popup specifically, YouTube has a video player, but you don't need to implement that - just display the video's thumbnail image instead.

Note: Your only restriction here is to use React. Any frameworks for UI are allowed.

Important technical details
Do Not use any libraries frameworks besides what is provided by React to build the UI. (The preferred way will be to use <SomeComponent style={...}> approach or you can also use StyledComponents). You can still use whatever method you prefer for styling such as CSS, SCSS and so on but the method described above is the preferred solution.
It isn't necessary to implement actions, e.g. clicking on a video or on the "watch later" button doesn't need to do anything.
The list must be an infinite scrollable list.
To get a paginated list of videos:
Create a new project on Google or use an existing one
Enable YouTube Data API v3
Create an API Key (Create credentials -> Create API Key). Make sure not to commit this API Key, store it in a git ignored file such as a `.env` file. 
Use the search: list API
Make sure the `part` parameter is set to `snippet`, the `type` parameter is set to `video`, the `q` parameter is set to `programming` and the `key` parameter is set to the API key you generated in the previous step.
Hint: You can also control the number of videos returned by each API call with the `maxResults` parameter.
API call example: https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&q=programming&key={{API_KEY}}
Skip any details not returned by the API, e.g. the number of views a video has or the channel's logo.
Instead of saying how many days/months/years ago a video was published, you can just show a date like MM/DD/YYYY instead.
If possible, do not use Redux store in your implementation (Look into React-Query) if you are looking for alternatives.
