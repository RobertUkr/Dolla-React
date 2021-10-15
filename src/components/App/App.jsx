import "./App.scss";
import Navbar from "../Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "../Sidebar";

function App() {
  return (
    <Router>
      <Sidebar />
      <Navbar />
    </Router>
  );
}

export default App;
