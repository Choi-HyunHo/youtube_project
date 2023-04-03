import React from "react";

const DetailInfo = ({ data }) => {
    return (
        <>
            {data && (
                <div className="flex flex-col">
                    <h2 className="text-xl font-bold">{data.title}</h2>
                    <div className="my-4 mb-8 ">
                        <img
                            src={data.thumbnails.default.url}
                            className="w-10 h-10 rounded-full"
                            alt="img"
                        />
                    </div>
                    <pre className="whitespace-pre-wrap">
                        {data.description}
                    </pre>
                </div>
            )}
        </>
    );
};

export default DetailInfo;
