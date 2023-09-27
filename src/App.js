import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import ResponsiveAppBar from "./Component/Header/ResponsiveAppBar";
import ResponsiveAppBar_1 from "./Component/Header/ResponsiveAppBar_1";
import Banner from "./Component/banner/Banner";
import CustomSeparator from "./Component/Breadcrumbs/CustomSeparator";
import Dashboard from "./Component/Dashboard/Dashboard";
import { Container } from "@material-ui/core";
import Brands from "./Component/Brands/Brands";
import Compare_Products from "./Component/Compare_Products/Compare_Products";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <Router>
      <>
        <ResponsiveAppBar_1 />
        <ResponsiveAppBar />
        <Banner />
        <CustomSeparator />
        <Container>
          <Dashboard />
        </Container>
        <Brands />
        <Compare_Products/>
        <Footer/>

        <>
          <Routes>
            {/* <Route path="/" exact component={Dashboard} /> */}
            {/* <Route path="/" exact component={Dashboard} /> */}
            {/* Add more routes as needed */}
          </Routes>
        </>
      </>
    </Router>
  );
}

export default App;
