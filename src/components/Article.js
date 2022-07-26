import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../api";

export default function Article() {
  const { article_id } = useParams();

  const [article, setArticle] = useState({});
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticleById(article_id)
      .then((response) => {
        setLoading(false);
        setErr(null);
        setArticle(response);
      })
      .catch((error) => {
        setLoading(false);
        setErr(error);
      });
  }, [article_id]);

  if (loading) {
    return <p>loading...</p>;
  }
  if (err) {
    return (
      <section>
        <p>
          {err.response.request.status}: {err.response.data.msg}!
        </p>
      </section>
    );
  }

  return (
    <article className="article-container">
      <header>
        <h1 className="article-title">{article.title}</h1>
      </header>
      <p className="article-author-name">Author: {article.author}</p>
      <section>
        <p className="article-body">{article.body}</p>
      </section>
      <footer>
        <p className="article-created-at">
          Created on:{" "}
          {article.created_at
            ? article.created_at.slice(0, 10) +
              " " +
              article.created_at.slice(11, 19)
            : article.created_at}
        </p>
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
      </footer>
    </article>
  );
}
