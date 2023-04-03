import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Videos from "./pages/Videos";
import VideoDetail from "./pages/VideoDetail";
import Root from "./pages/Root";
import { QueryClient, QueryClientProvider } from "react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));

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

const queryClient = new QueryClient();

root.render(
	<QueryClientProvider client={queryClient}>
		<RouterProvider router={router}>
			<App />
		</RouterProvider>
	</QueryClientProvider>
);
