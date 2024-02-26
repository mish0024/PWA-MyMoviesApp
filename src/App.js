import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import GlobalLayout from "./Layout";
import Search from "./pages/Search";
import Home from "./pages/result/Home";
import SingleMovie from "./pages/result/[id]";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalLayout>
          <Routes>
            <Route element={<Search />} path="/" />
            <Route element={<Home />} path="result" />
            <Route element={<SingleMovie />} path="/result/:slug" />
          </Routes>
        </GlobalLayout>
      </Router>
    </div>
  );
}

export default App;
