import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { searchList, popularList } from "../api/youTube";
import VideoCard from "../components/common/VideoCard";

const Videos = () => {
    const { keyword } = useParams();

    const { data, isLoading } = useQuery(["videos", keyword], () =>
        keyword ? searchList(keyword) : popularList()
    );

    return (
        <>
            {isLoading && <span>Loading...</span>}
            {data && (
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
                    {data.map((video, index) => (
                        <li key={index}>
                            <VideoCard video={video} />
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default Videos;
