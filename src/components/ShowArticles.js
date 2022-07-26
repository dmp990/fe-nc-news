import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../api";
import ArticleCard from "./ArticleCard";
import TopicsForm from "./TopicsForm";

export default function ShowArticles({ showAll, topics }) {
  const [articles, setArticles] = useState([]);

  const { topic } = useParams();

  useEffect(() => {
    fetchArticles(topic).then((articles) => {
      setArticles(articles);
    });
  }, [topic]);

  return (
    <>
      {topic !== "undefined" && showAll === false ? (
        <TopicsForm topics={topics} />
      ) : (
        <></>
      )}
      <section className="article">
        {articles.map((article) => (
          <ArticleCard
            key={article.article_id}
            title={article.title}
            article_id={article.article_id}
            author={article.author}
            created_at={article.created_at}
            topic={article.topic}
            comment_count={article.comment_count}
            votes={article.votes}
          />
        ))}
      </section>
    </>
  );
}
