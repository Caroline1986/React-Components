import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({videos, onVideoSelect}) => {
   const renderedList =  videos.map((video) => {
        return <VideoItem
           key={video.id.videoId}
           onVideoSelect={onVideoSelect}
           video={video}/>;
    });

    return <div className={"ui relaxed divided list"}>{renderedList}</div>
};
//or this
// const VideoList = props => {
//     return <div>{props.videos.length}</div>
// };

export default VideoList;