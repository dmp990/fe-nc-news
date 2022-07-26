import React from "react";
import ShowArticles from "./ShowArticles";
import TopicsForm from "./TopicsForm";

export default function Topics({ topics }) {
  return (
    <section>
      {/*here goes form*/}
      <TopicsForm topics={topics} />
      <ShowArticles showAll={true} topics={topics} />
    </section>
  );
}

/*
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
        <button
          type="submit"
          disabled={selectedTopic === "all" || selectedTopic === undefined}
        >
          Apply Filter
        </button>
      </form>
      */
