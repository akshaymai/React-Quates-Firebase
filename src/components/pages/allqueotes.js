import React, { useEffect } from "react";
import QuoteList from "../quotes/QuoteList";
import { getAllQuotes } from "../lib/api";
import useHttp from "../Hooks/use-http";
import LoadingSpinner from "../UI/LoadingSpinner";
import NoQuotesFound from "../quotes/NoQuotesFound";
 
const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: allquoestsDAta,
    error,
  } = useHttp(getAllQuotes, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }


  if(error){
      return <p className="centered focused">{error}</p>
  }
 
  if(status==='completed' &&(!allquoestsDAta || allquoestsDAta.length === 0)){
      return <NoQuotesFound/>
  }
  return <QuoteList quotes={allquoestsDAta} />;
};

export default AllQuotes; 
