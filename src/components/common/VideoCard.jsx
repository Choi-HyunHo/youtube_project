import React from "react";
import { formatAgo } from "../../util/data";

const VideoCard = ({ video }) => {
	const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

	return (
		<span>
			<img className="w-full" src={thumbnails.medium.url} alt={title} />
			<div>
				<p className="font-semibold my-2 line-clamp-2">{title}</p>
				<p className="text-sm opacity-80">{channelTitle}</p>
				<p className="text-sm opacity-80">
					{formatAgo(publishedAt, "ko")}
				</p>
			</div>
		</span>
	);
};

export default VideoCard;
