import React, { useState } from "react";
import ShowArticles from "./ShowArticles";

export default function Topics({ topics }) {
  const [selectedTopic, setSelectedTopic] = useState();

  const handleFormSubmission = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleFormSubmission}>
        <label>
          Topic:{" "}
          <select
            onChange={(e) => {
              setSelectedTopic(() => e.target.value);
            }}
          >
            <option>all</option>
            {topics.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
      </form>
      <ShowArticles selectedTopic={selectedTopic} />
    </div>
  );
}
