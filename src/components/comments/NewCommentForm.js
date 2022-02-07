import { useRef, useEffect } from "react";

import classes from "./NewCommentForm.module.css";
import { addComment } from "../lib/api";
import useHttp from "../Hooks/use-http"; 
import LoadingSpinner from "../UI/LoadingSpinner";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  // const history = useHistory();

  const { sendRequest, status, error } = useHttp(addComment);
  const { onAddedComments } = props;
  useEffect(() => {
    if (status === "completed" && !error) {
      onAddedComments();
    }
  }, [status, error, onAddedComments]);

  const submitFormHandler = (event) => {
    event.preventDefault();
    sendRequest({ commentData:{text: commentTextRef.current.value },quetoId: props.quoetId});
    commentTextRef.current.value=""
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === "pending" && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
