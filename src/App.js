import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {Fisettings} from 'react-icons/fi'
import SettingsIcon from "@mui/icons-material/Settings";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ThemeSettings from "./components/ThemeSettings";
import Ecommerce from "./pages/Ecommerce";
import Orders from "./pages/Orders";
import Calender from "./pages/Calender";
import Employees from "./pages/Employees";
import Pyramid from "./pages/Charts/Pyramid";
import Customers from "./pages/Customers";
import Kanban from "./pages/Kanban";
import Area from "./pages/Charts/Area";
import Bar from "./pages/Charts/Bar";
import Pie from "./pages/Charts/Pie";
import Financial from "./pages/Charts/Financial";
import ColorPicker from "./pages/ColorPicker";
import ColorMapping from "./pages/Charts/ColorMapping";
import Editor from "./pages/Editor";
import Line from "./pages/Charts/Line";
import Stacked from "./pages/Charts/Stacked";
import { useStateContext } from "./contexts/ContextProvider";

function App() {
  // const { activeMenue } = useStateContext();
  const activeMenue = true;
  return (
    <div className="App">
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <SettingsIcon />
                {/* <Fisettings/> */}
              </button>
            </TooltipComponent>
          </div>
          {activeMenue ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-bg
             bg-main-bg min-h-screen w-full ${
               activeMenue ? "mid:ml-72" : "flex-2"
             }`}
          >
            {/* <div
            className={
              activeMenue
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }
          > */}

            <div
              className="fixed md:static
             bg-main-bg dark:bg-main-dark-bg 
             navbar w-full"
            >
              <Navbar />
            </div>

            <div>
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />
                {/* Pages */}
                <Route path="/orders" element={<orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />
                {/* Apps */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calender" element={<Calender />} />
                <Route path="/color-picker" element={<ColorPicker />} />
                {/* Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/colorMapping" element={<ColorMapping />} />
                <Route path="/pyramind" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
