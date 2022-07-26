import React from "react";
import { useNavigate } from "react-router-dom";

export default function ArticleCard({
  article_id,
  title,
  author,
  created_at,
  topic,
  comment_count,
  votes,
}) {
  const navigate = useNavigate();
  const handleClick = (article_id) => {
    navigate("/articles/" + article_id);
  };
  return (
    <section
      className="article_card"
      onClick={() => {
        handleClick(article_id);
      }}
    >
      <h3 className="article_card_title">{title}</h3>
      <p className="article_card_author">By: {author}</p>
      <p className="article_card_created_at">
        Created on: {created_at.slice(0, 10)}
      </p>
      <p className="article_card_topic">Topic: {topic}</p>
      <p className="article_card_comment_count">Comments: {comment_count}</p>
      <p className="article_card_votes">Votes: {votes}</p>
    </section>
  );
}
