import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Videos from "./pages/Videos";
import VideoDetail from "./pages/VideoDetail";
import Root from "./pages/Root";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{ index: true, element: <Videos /> },
			{ path: "/videos", element: <Videos /> },
			{ path: "/videos/:keyword", element: <Videos /> },
			{ path: "/videos/watch/:keyword", element: <VideoDetail /> },
		],
	},
]);

function App() {
	return (
		<RouterProvider router={router}>
			<Videos />
		</RouterProvider>
	);
}

export default App;
