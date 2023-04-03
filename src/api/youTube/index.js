import { instance } from "..";

export const searchList = async (keyword) => {
	console.log(keyword);
	const url = `search?part=snippet&maxResults=25&q=${keyword}&key=${process.env.REACT_APP_YOUTUBE_KEY}`;
	const response = await instance.get(url).then((res) => {
		return res.data.items;
	});
	return response;
};

export const popularList = async () => {
	const url = `videos?part=snippet&chart=mostPopular&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_KEY}`;
	const response = await instance.get(url).then((res) => {
		return res.data.items;
	});
	return response;
};

export const relatedList = async (id) => {
	const url = `search?part=snippet&relatedToVideoId=${id}&type=video&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_KEY}`;
	const response = await instance.get(url).then((res) => {
		return res.data.items;
	});

	return response;
};
