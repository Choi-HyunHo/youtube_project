import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { searchList, popularList } from "../api/youTube";
import VideoCard from "../components/common/VideoCard";
import axios from "axios";

const Videos = () => {
	const { keyword } = useParams();

	// 실제로 사용할 코드
	// const { data, isLoading } = useQuery(["videos", keyword], () =>
	//     keyword ? searchList(keyword) : popularList()
	// );

	// test code
	const { data, isLoading } = useQuery(["videos", keyword], () => {
		return axios
			.get(`/data/${keyword ? "search" : "popular"}.json`)
			.then((res) => res.data.items);
	});

	const navigation = useNavigate();

	const handelDetail = (id) => {
		navigation(`/videos/watch/${id}`);
	};

	return (
		<>
			{isLoading && <span>Loading...</span>}
			{data && (
				<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
					{data.map((video, index) => (
						<li onClick={() => handelDetail(video.id)} key={index}>
							<VideoCard video={video} />
						</li>
					))}
				</ul>
			)}
		</>
	);
};

export default Videos;
