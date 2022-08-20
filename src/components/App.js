import React, { useEffect, useState } from "react";
import useVideos from "../hooks/useVideos";
import SearchBar from "./SearchBar";
import VideoDetails from "./VideoDetail";
import VideoList from "./VideoList";

function App() {
  const [selectedVideo, setselectedVideo] = useState(null);
  const [videos, search] = useVideos("buildings");

  useEffect(() => {
    setselectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onTermSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetails video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={setselectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
