import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { searchList } from "../api/youTube";
import VideoCard from "../components/common/VideoCard";

const Videos = () => {
    const { keyword } = useParams();

    const { data, isLoading } = useQuery(["videos", keyword], searchList);

    console.log(data);

    return (
        <>
            {isLoading && <span>Loading...</span>}
            {data && (
                <ul>
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
