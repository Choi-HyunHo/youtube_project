import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Videos from "./pages/Videos";
import VideoDetail from "./pages/VideoDetail";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Videos />,
		children: [
			{ path: "/videos", element: <Videos /> },
			{ path: "/videos/:id", element: <Videos /> },
			{ path: "/videos/watch/:id", element: <VideoDetail /> },
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
