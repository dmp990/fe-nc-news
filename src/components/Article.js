import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../api";

export default function Article() {
  const { article_id } = useParams();

  const [article, setArticle] = useState({});

  useEffect(() => {
    fetchArticleById(article_id).then((response) => {
      setArticle(response);
    });
  }, [article_id]);

  return (
    <div>
      <article className="article-container">
        <header>
          <h1 className="article-title">{article.title}</h1>
        </header>
        <div className="article-author-name">Author: {article.author}</div>
        <div className="article-body">{article.body}</div>
        <div className="article-created-at">
          Created on:{" "}
          {article.created_at
            ? article.created_at.slice(0, 10) +
              " " +
              article.created_at.slice(11, 19)
            : article.created_at}
        </div>
        <div>
          <button className="thumbsup-button">👍</button>
          {article.votes}
          <button
            className="thumbsup-button"
            onClick={() => {
              console.log("clicked");
            }}
            disabled={article.votes === 0}
          >
            👎
          </button>
        </div>
      </article>
    </div>
  );
}
