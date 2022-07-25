import "./App.css";

import { activeUsernameContext } from "./contexts/activeUsernameContext";

import Login from "./components/Login";
import { useEffect, useState } from "react";
import { fetchUsers } from "./api";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Topics from "./components/Topics";
import Topbar from "./components/Topbar";

function App() {
  const [activeUsername, setActiveUsername] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then((users) => {
      setUsers(() => {
        const newArr = [];
        users.forEach((u) => {
          newArr.push(u.username);
        });
        return newArr;
      });
    });
  }, []);

  return (
    <activeUsernameContext.Provider
      value={{ activeUsername, setActiveUsername }}
    >
      <BrowserRouter>
        <div className="App">
          <Topbar />
          <Routes>
            <Route path="/" element={<Login users={users} />} />
            <Route path="/topics" element={<Topics />} />
          </Routes>
        </div>
      </BrowserRouter>
    </activeUsernameContext.Provider>
  );
}

export default App;
