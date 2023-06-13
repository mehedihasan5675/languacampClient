import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import { router } from "./components/routes/Routes.jsx";
import "./index.css";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <AuthProvider>
      <QueryClientProvider client={queryClient}>
          <div >
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      </AuthProvider>
  </React.StrictMode>
);
