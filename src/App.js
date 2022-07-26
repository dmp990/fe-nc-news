import "./App.css";

import { activeUsernameContext } from "./contexts/activeUsernameContext";

import Login from "./components/Login";
import { useEffect, useState } from "react";
import { fetchTopics, fetchUsers } from "./api";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Topbar from "./components/Topbar";
import Topics from "./components/Topics";
import ShowArticles from "./components/ShowArticles";
import Article from "./components/Article";

function App() {
  const [activeUsername, setActiveUsername] = useState("");
  const [users, setUsers] = useState([]); // array of usernames
  const [topics, setTopics] = useState([]); // array of topic slugs

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
  useEffect(() => {
    fetchTopics().then((topics) => {
      setTopics(() => {
        const newArr = [];
        topics.forEach((t) => {
          newArr.push(t.slug);
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
            <Route path="/topics" element={<Topics topics={topics} />} />
            <Route path="/topics/:topic" element={<ShowArticles />} />
            <Route path="/articles/:article_id" element={<Article />} />
          </Routes>
        </div>
      </BrowserRouter>
    </activeUsernameContext.Provider>
  );
}

export default App;
