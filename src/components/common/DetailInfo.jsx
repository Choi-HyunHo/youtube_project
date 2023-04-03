import React from "react";

const DetailInfo = ({ data }) => {
	return (
		<>
			{data && (
				<div className="flex flex-col">
					<span>{data.title}</span>
					<img
						src={data.thumbnails.default.url}
						width="40"
						alt="img"
					/>
					<span>{data.description}</span>
				</div>
			)}
		</>
	);
};

export default DetailInfo;
