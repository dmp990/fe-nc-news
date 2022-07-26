import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticles, fetchArticlesByTopic } from "../api";
import ArticleCard from "./ArticleCard";

export default function ShowArticles({ showAll }) {
  const [articles, setArticles] = useState([]);

  const { topic } = useParams();

  useEffect(() => {
    if (topic === undefined || showAll) {
      fetchArticles().then((articles) => {
        setArticles(articles);
      });
    } else {
      fetchArticlesByTopic(topic).then((articles) => {
        setArticles(articles);
      });
    }
  }, []);

  return (
    <div>
      <div className="article">
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
      </div>
    </div>
  );
}
