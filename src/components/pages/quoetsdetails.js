import React, { Fragment, useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";
import { getSingleQuote } from "../lib/api";
import useHttp from "../Hooks/use-http";
import LoadingSpinner from "../UI/LoadingSpinner";
import NoQuotesFound from "../quotes/NoQuotesFound";

const QueotesDetails = () => {
  const match = useRouteMatch();
  const { id } = useParams();
  const {
    sendRequest,
    status,
    data: getSinglequotes,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(id);
  }, [id, sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered focused">{error}</p>;
  }
  if (status === "completed" && !getSinglequotes.text) {
    return <NoQuotesFound />;
  }

  // const allqueotes = [
  //   { id: "1", author: "akshay", text: "React" },
  //   { id: "2", author: "arnab", text: "Node" },
  //   { id: "3", author: "anirban", text: "React  Native" },
  // ];
  // const queotes = allqueotes.find((item) => item.id === params.id);
  // if (!queotes) {
  //   return <p>No quests found</p>;
  // }

  return (
    <Fragment>
      <HighlightedQuote
        text={getSinglequotes.text}
        author={getSinglequotes.author}
      />
      {/* <Route path={`/queots/${params.id}`} exact> */}
      <Route path={match.path} exact>
        <div className="centered">
          <Link to={`${match.url}/comments`} className="btn--flat">
            {/* <Link to={`/queots/${params.id}/comments`} className="btn--flat"> */}
            Load comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        {/* <Route path={`/queots/${params.id}/comments`}> */}
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QueotesDetails;
