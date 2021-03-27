import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({videos}) => {
   const renderedList =  videos.map((video) => {
        return <VideoItem video={video}/>;
    });

    return <div>{renderedList}</div>
};
//or this
// const VideoList = props => {
//     return <div>{props.videos.length}</div>
// };

export default VideoList;