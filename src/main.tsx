import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/Layouts/MainLayout/MainLayout";
import HomePage from "./pages/Home.page";
import LoginPage from "./pages/Login.page";
import SignInPage from "./pages/SignIn.page";
import { PrimeReactProvider } from "primereact/api";
import { Pt } from "./components/Prime/Passthrought";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <SignInPage />,
  },
]);

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <PrimeReactProvider value={{ unstyled: true, pt: Pt }}>
      <RouterProvider router={router} />
    </PrimeReactProvider>,
  );
} else {
  console.error("Root element not found");
}
