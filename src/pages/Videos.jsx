import React from "react";
import { useParams } from "react-router-dom";

const Videos = () => {
	const { keyword } = useParams();

	return <span>Videos : {keyword}</span>;
};

export default Videos;
