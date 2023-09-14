import "devextreme/dist/css/dx.light.css";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Games from "./pages/games";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
import Nopage from "./pages/Nopage";
import Xox from "./games/Xox";
import Sudoko from "./games/Sudoko";
import Rps from "./games/Rps";
import Blogs from "./pages/Blogs";
import Puzzle from "./games/Puzzle";
import Person from "./contact/Person";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="games" element={<Games />} />
          <Route path="xox" element={<Xox />} />
          <Route path="sudoko" element={<Sudoko />} />
          <Route path="rps" element={<Rps />} />
          <Route path="puzzle" element={<Puzzle />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="person" element={<Person />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Nopage />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
