import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Videos from "./pages/Videos";
import VideoDetail from "./pages/VideoDetail";
import Root from "./pages/Root";

const queryClient = new QueryClient();

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{ index: true, element: <Videos /> },
			{ path: "/videos", element: <Videos /> },
			{ path: "/videos/:keyword", element: <Videos /> },
			{ path: "/videos/watch/:id", element: <VideoDetail /> },
		],
	},
]);

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router}>
				<Videos />
			</RouterProvider>
		</QueryClientProvider>
	);
}

export default App;
