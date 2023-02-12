const axios = require("axios");

const baseURL = "https://be-nc-news-jtlp.onrender.com/api";

export const fetchUsers = () => {
  return axios
    .get(baseURL + "/users")
    .then((response) => {
      return response.data.users;
    })
    .catch((err) => {
      return err;
    });
};

export const fetchTopics = () => {
  return axios
    .get(baseURL + "/topics")
    .then((response) => {
      return response.data.topics;
    })
    .catch((err) => {
      return err;
    });
};

export const fetchArticles = ({
  topic,
  sort_by = "created_at",
  order = "desc",
}) => {
  return axios
    .get(baseURL + "/articles", {
      params: { topic, limit: 5000, sort_by, order },
    })
    .then((response) => {
      return response.data.articles;
    });
};

export const fetchArticleById = (id) => {
  return axios.get(baseURL + `/articles/${id}`).then((response) => {
    return response.data.article;
  });
};

//PATCH /api/articles/:article_id"
export const patchArticleById = (id, vote) => {
  return axios
    .patch(baseURL + `/articles/${id}`, { inc_votes: vote })
    .then((response) => {
      return response.data.article;
    });
};

// GET /api/articles/:article_id/comments"
export const fetchCommentsByArticleId = (id) => {
  return axios
    .get(baseURL + `/articles/${id}/comments?limit=5000`)
    .then((response) => {
      return response.data.comments;
    });
};

// POST /api/articles/:article_id/comments"
export const postCommentByArticleId = (id, username, body) => {
  return axios
    .post(baseURL + `/articles/${id}/comments`, {
      username: username,
      body: body,
    })
    .then((response) => {
      return response.data.comment;
    });
};

//DELETE /api/comments/:comment_id"
export const deleteCommentByCommentId = (comment_id) => {
  return axios.delete(baseURL + `/comments/${comment_id}`).then(() => {
    return;
  });
};
