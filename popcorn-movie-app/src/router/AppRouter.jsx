import {BrowserRouter, Routes, Route} from "react-router-dom";
import {GlobalProvider} from "../context/GlobalState";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Home from "../pages/Home";
import About from "../pages/About";
import Favourites from "../pages/Favourites";
import Details from "../pages/Details";
import Error from "../pages/Error";

function AppRouter() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/detail" element={<Details />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default AppRouter;
