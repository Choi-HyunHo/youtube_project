import React, { useEffect, useState } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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
		<div className="w-full flex items-center p-4 text-2xl border-b border-zinc-600 mb-4">
			<Link to="/" className="flex justify-center">
				<BsYoutube className="text-4xl text-red-600" />
				<h1 className="font-bold ml-2 text-3xl">YouTube</h1>
			</Link>
			<form className="w-full flex justify-center">
				<input
					className="w-5/6 p-2 outline-none rounded-lg bg-black text-gray-50"
					value={value}
					type="text"
					onChange={(e) => setValue(e.target.value)}
					placeholder="Search..."
				/>
				<button className="pl-4" onClick={handleSubmit}>
					<BsSearch />
				</button>
			</form>
		</div>
	);
};

export default Navbar;
