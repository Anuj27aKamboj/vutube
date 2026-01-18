import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return comments.map((comment) => (
    <div key={comment.id}>
      <Comment data={comment} />
      <div className="ml-5 border-l border-stone-500 rounded-bl">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentsList;
