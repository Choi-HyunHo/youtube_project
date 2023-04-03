import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import VideoCard from "../components/common/VideoCard";
import { useQuery } from "react-query";
import axios from "axios";

const VideoDetail = () => {
	const { id } = useParams();

	const { data, isLoading } = useQuery("related", () => {
		return axios.get(`/data/related.json`).then((res) => res.data.items);
	});

	const navigation = useNavigate();

	const handleRelated = (id) => {
		navigation(`/videos/watch/${id}`);
	};

	return (
		<div className="flex gap-12">
			<div className="w-full">
				<iframe
					width="90%"
					height="800"
					src={`https://www.youtube.com/embed/${id}`}
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				/>

				<div>1111</div>
			</div>

			<div className="basis-2/12">
				{data && (
					<ul>
						{data.map((video, index) => (
							<li
								onClick={() => handleRelated(video.id.videoId)}
								key={index}
							>
								<VideoCard video={video} />
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default VideoDetail;
