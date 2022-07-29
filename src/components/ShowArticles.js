import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../api";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import TopicsForm from "./TopicsForm";

export default function ShowArticles({ showAll, topics }) {
  const [articles, setArticles] = useState([]);
  const [sort_by, setSort_by] = useState("created_at");
  const [order, setOrder] = useState("desc"); // desc, asc -> desc by default
  const [loading, setLoading] = useState(true);

  const { topic } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchArticles({ topic, sort_by, order }).then((articles) => {
      setLoading(false);
      setArticles(articles);
    });
  }, [topic, sort_by, order]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {topic !== "undefined" && showAll === false ? (
        <TopicsForm topics={topics} />
      ) : (
        <></>
      )}

      <form>
        <label>
          Sort:
          <select
            value={sort_by}
            onChange={(e) => {
              setSort_by(e.target.value);
            }}
          >
            <option value={"created_at"}>created_at</option>
            <option value={"author"}>author</option>
            <option value={"title"}>title</option>
            <option value={"topic"}>topic</option>
            <option value={"votes"}>votes</option>
            <option value={"comment_count"}>comment_count</option>
          </select>
        </label>{" "}
        <button
          type="button"
          onClick={() => {
            setOrder(() => {
              order === "desc" ? setOrder(() => "asc") : setOrder(() => "desc");
            });
          }}
        >
          {order}
        </button>
      </form>

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
