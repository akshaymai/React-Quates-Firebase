import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../quotes/QuoteForm";
import { addQuote } from "../lib/api";
import useHttp from "../Hooks/use-http";


const Addquotes = () => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") {
      history.push("/allquests");
    }
  }, [status, history]);

  const addQuotesHandler = (data) => {
    console.log(data)
    if(data.author===''|| data.text===''){
      return
    }
    sendRequest(data);
  };
  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuotesHandler} />
  );
};

export default Addquotes;
