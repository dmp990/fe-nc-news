import React, { useEffect, useState } from "react";
import { fetchArticles, fetchArticlesByTopic } from "../api";
import ArticleCard from "./ArticleCard";

export default function ShowArticles({ selectedTopic }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (selectedTopic === "all" || selectedTopic === undefined) {
      fetchArticles().then((articles) => {
        setArticles(articles);
      });
    } else {
      fetchArticlesByTopic(selectedTopic).then((articles) => {
        setArticles(articles);
      });
    }
  }, [selectedTopic]);

  return (
    <div>
      <div className="article">
        {articles.map((article) => (
          <ArticleCard
            key={article.article_id}
            title={article.title}
            author={article.author}
            created_at={article.created_at}
            topic={article.topic}
            comment_count={article.comment_count}
            votes={article.votes}
          />
        ))}
      </div>
    </div>
  );
}
