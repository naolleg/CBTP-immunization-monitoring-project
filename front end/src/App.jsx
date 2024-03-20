import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./Markup/Page/Role/Mother/Nav";
import Aboutus from "./Markup/Page/Common/Aboutus";
import Service from "./Markup/Page/Common/Service";
import Myinfo from "./Markup/Page/Role/Mother/Myinfo";
import Index from "./Markup/Page/Common/Index";
import Login from "./Markup/Page/Common/Login";
import FourO4 from "./Markup/Page/Common/FourO4";
import MotherRegistration from "./Markup/Page/Role/Reciption/MotherRegistration";
import Profile from "./Markup/Page/Common/Profile";
import SignUp from "./Markup/Page/Common/Signup";
import MotherList from "./Markup/Page/Role/Reciption/MotherList copy";
import ChildInfo from "./Markup/Page/Role/Reciption/ChildInfo";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>


        {/* For all */}
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/service" element={<Service />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<FourO4 />} />

        


        



        {/* For mother */}
        <Route path="/myinfo" element={<Myinfo />} />
        <Route path="/login" element={<Login />} />
        



        {/* For reception */}

        <Route path="/motherRegistration" element={<MotherRegistration />} />
        {/* <Route path="/motherlist" element={<MotherList />} /> */}
        <Route path="/motherlist" element={<MotherList/>} />
        <Route path="/childinfo" element={<ChildInfo/>} />


        {/* For Health Officer */}
      </Routes>
    </>
  );
}

export default App;
