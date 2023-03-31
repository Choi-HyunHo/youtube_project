import React from "react";
import { useParams } from "react-router-dom";

const Videos = () => {
	const { keyword } = useParams();

	return (
		<>
			<span className="text-3xl bg-gray-900 text-blue-500">
				Videos : {keyword}
			</span>
		</>
	);
};

export default Videos;
