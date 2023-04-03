import React from "react";
import { formatAgo } from "../../util/data";

const VideoCard = ({ video, type }) => {
    const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
    const isList = type === "list";

    return (
        <div className={isList ? "flex gap-1 m-2" : ""}>
            <img
                className={isList ? "w-60 mr-2" : "w-full"}
                src={thumbnails.medium.url}
                alt={title}
            />
            <div>
                <p className="font-semibold my-2 line-clamp-2">{title}</p>
                <p className="text-sm opacity-80">{channelTitle}</p>
                <p className="text-sm opacity-80">
                    {formatAgo(publishedAt, "ko")}
                </p>
            </div>
        </div>
    );
};

export default VideoCard;
