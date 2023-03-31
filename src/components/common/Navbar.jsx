import React, { useEffect, useState } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";

const Navbar = () => {
	const { keyword } = useParams();
	const navigation = useNavigate();
	const [value, setValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		navigation(`/videos/${value}`);
	};

	useEffect(() => {
		setValue(keyword || "");
	}, [keyword]);

	return (
		<div>
			<BsYoutube />
			<form>
				<input
					value={value}
					type="text"
					onChange={(e) => setValue(e.target.value)}
				/>
				<button onClick={handleSubmit}>
					<BsSearch />
				</button>
			</form>
		</div>
	);
};

export default Navbar;
