import React from "react";

const VideoCard = ({ video }) => {
    return <span>{video.snippet.title}</span>;
};

export default VideoCard;
