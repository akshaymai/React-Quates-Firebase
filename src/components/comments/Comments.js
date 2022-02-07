import { useCallback, useEffect, useState } from "react";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import { getAllComments } from "../lib/api";
import useHttp from "../Hooks/use-http";
import {  useParams } from "react-router-dom";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "./CommentsList";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  const { sendRequest, data: loadedcomments, status } = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(params.id);
  }, [params.id, sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  
  const addcommentshandler = useCallback(() => {
    sendRequest(params.id);
  }, [sendRequest, params.id]);
  
  let comments;
  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (status === "completed" && loadedcomments && loadedcomments.length > 0) {
    comments = <CommentsList comments={loadedcomments} />;
  }

  if (
    status === "completed" &&
    (!loadedcomments || loadedcomments.length === 0 )
  ) {
    comments = <p className="centered">No comments found</p>;
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoetId={params.id}
          onAddedComments={addcommentshandler}
        />
      )}
      {comments}
    </section>
  );
};

export default Comments;
