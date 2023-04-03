import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import RelatedVideo from "../components/common/RelatedVideo";
import axios from "axios";
import DetailInfo from "../components/common/DetailInfo";
import { channelInfo } from "../api/youTube";

const VideoDetail = () => {
    const { id } = useParams();
    const location = useLocation();
    const { channelId } = location.state;
    console.log(channelId);

    const { data } = useQuery(["details", channelId], () =>
        channelInfo(channelId)
    );

    // const { data } = useQuery("detail", () => {
    //     return axios
    //         .get(`/data/channel.json`)
    //         .then((res) => res.data.items[0].snippet);
    // });

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="flex flex-col lg:flex-row">
            <div className="basis-4/6">
                <iframe
                    width="100%"
                    height="640"
                    src={`https://www.youtube.com/embed/${id}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                />
                <div className="p-8">
                    <DetailInfo data={data} />
                </div>
            </div>

            <div className="basis-2/6">
                <RelatedVideo id={id} />
            </div>
        </div>
    );
};

export default VideoDetail;
