import { createBrowserRouter } from "react-router";
import { Home } from "./components/Home";
import { FarmerInputForm } from "./components/FarmerInputForm";
import { Recommendations } from "./components/Recommendations";
import { Weather } from "./components/Weather";
import { Alerts } from "./components/Alerts";
import { Learning } from "./components/Learning";
import { Help } from "./components/Help";
import { Dashboard } from "./components/Dashboard";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "input", Component: FarmerInputForm },
      { path: "recommendations", Component: Recommendations },
      { path: "weather", Component: Weather },
      { path: "alerts", Component: Alerts },
      { path: "learning", Component: Learning },
      { path: "help", Component: Help },
      { path: "dashboard", Component: Dashboard },
    ],
  },
]);
