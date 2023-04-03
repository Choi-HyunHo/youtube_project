import React from "react";
import VideoCard from "./VideoCard";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { relatedList } from "../../api/youTube";

const RelatedVideo = ({ id }) => {
	// const { data } = useQuery(["related", id], () => relatedList(id));

	// test 코드
	const { data, isLoading } = useQuery("related", () => {
		return axios.get(`/data/related.json`).then((res) => res.data.items);
	});

	const navigation = useNavigate();

	const handleRelated = (id, channelId) => {
		navigation(`/videos/watch/${id}`, {
			replace: true,
			state: { channelId },
		});
	};

	return (
		<>
			{data && (
				<ul>
					{data.map((video, index) => (
						<li
							onClick={() =>
								handleRelated(
									video.id.videoId,
									video.snippet.channelId
								)
							}
							key={index}
						>
							<VideoCard video={video} />
						</li>
					))}
				</ul>
			)}
		</>
	);
};

export default RelatedVideo;
