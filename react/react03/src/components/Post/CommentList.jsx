import React from "react";

export default function CommentList({ comments }) {
  return (
    <div className="py-3">
      <h3>Bình luận</h3>

      {comments.length ? (
        comments.map((comment, index) => (
          <div key={index} className="mb-3">
            <h3>{comment.name}</h3>
            <p>{comment.content}</p>
          </div>
        ))
      ) : (
        <p>chưa có bình luận nào ở đây</p>
      )}
    </div>
  );
}
