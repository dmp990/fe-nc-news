import React from "react";
import ShowArticles from "./ShowArticles";
import TopicsForm from "./TopicsForm";

export default function Topics({ topics }) {
  return (
    <section>
      <TopicsForm topics={topics} />
      <ShowArticles showAll={true} topics={topics} />
    </section>
  );
}
