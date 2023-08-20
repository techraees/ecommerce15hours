import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { FiSettings } from "react-icons/fi";

import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./sub";
import {
  Ecommerce,
  Orders,
  Calendar,
  ColorPicker,
  Customers,
  Editor,
  Employees,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorMapping,
  Stacked,
  Pyramid,
} from "./pages";

import { useStateContext } from "../../contexts/ContextProvider";

const Dashboard = () => {
  const {
    activeMenu,
    setActiveMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  const renderComponent = (componentName) => {
    switch (componentName) {
      case "ecommerce":
        return <Ecommerce />;
      case "orders":
        return <Orders />;
      case "calendar":
        return <Calendar />;
      case "color-picker":
        return <ColorPicker />;
      case "customers":
        return <Customers />;
      case "editor":
        return <Editor />;
      case "employees":
        return <Employees />;
      case "kanban":
        return <Kanban />;
      case "line":
        return <Line />;
      case "area":
        return <Area />;
      case "bar":
        return <Bar />;
      case "pie":
        return <Pie />;
      case "financial":
        return <Financial />;
      case "color-mapping":
        return <ColorMapping />;
      case "pyramid":
        return <Pyramid />;
      case "stacked":
        return <Stacked />;
      default:
        return null;
    }
  };
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex relative dark:bg-main-dark-bg ">
        <div className="fixed right-4 bottom-4 z-10">
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              className="text-3xl p-3 hover:drop-shadow-3xl hover:bg-light-gray text-white"
              style={{ background: currentColor, borderRadius: "50%" }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div
          className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
            activeMenu ? "md:ml-72" : "flex-2"
          }`}
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>

          <div>
            {/* Theme Settings Components */}
            {themeSettings && <ThemeSettings />}
            {renderComponent(activeMenu)}

            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

{
  /* <Routes>
{/* Dashboard */
}
{
  /* <Route path="/" element={<Ecommerce />} />
<Route path="/dashboard/ecommerce" element={<Ecommerce />} /> */
}

{
  /* Pages */
}
{
  /* <Route path="/dashboard/orders" element={<Orders />} />
<Route path="/dashboard/employees" element={<Employees />} />
<Route path="/dashboard/customers" element={<Customers />} /> */
}

{
  /* Apps */
}
{
  /* <Route path="/dashboard/kanban" element={<Kanban />} />
<Route path="/dashboard/editor" element={<Editor />} />
<Route path="/dashboard/calendar" element={<Calendar />} />
<Route path="/dashboard/color-picker" element={<ColorPicker />} /> */
}

{
  /* Charts */
}
{
  /* <Route path="/dashboard/line" element={<Line />} />
<Route path="/dashboard/area" element={<Area />} />
<Route path="/dashboard/bar" element={<Bar />} />
<Route path="/dashboard/pie" element={<Pie />} />
<Route path="/dashboard/financial" element={<Financial />} />
<Route
  path="/dashboard/color-mapping"
  element={<ColorMapping />}
/>
<Route path="/dashboard/pyramid" element={<Pyramid />} />
<Route path="/dashboard/stacked" element={<Stacked />} /> */
}
// </Routes> */}
