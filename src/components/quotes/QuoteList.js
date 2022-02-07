import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = (props) => {
  const sortQuotes = (quotes, ascending) => {
    return quotes.sort((quoteA, quoteB) => {
      if (ascending) {
        return quoteA.id > quoteB.id ? 1 : -1;
      } else {
        return quoteA.id < quoteB.id ? 1 : -1;
      }
    });
  };

  const history=useHistory() 
  const location=useLocation() 
  const queryParams=new URLSearchParams(location.search)
 
  const isSortingAscending=queryParams.get('sort') === 'asc'
  const sortedQuests=sortQuotes(props.quotes,isSortingAscending)

  const changeSortingHandler=()=>{
    // history.push('/allquests?sort='+(isSortingAscending ? 'desc':'asc'))
    history.push({
      pathname:location.pathname,
      search:`sort=${(isSortingAscending ? 'desc':'asc')}`
    })
        // history.push(`${location.pathname}?sort=${(isSortingAscending ? 'desc':'asc')}`)

      
  } 
  return (
    <Fragment>
      <div className={classes.sorting}>
      <button onClick={changeSortingHandler}>
        Sort {isSortingAscending?'Descending':'Ascending'}
      </button>
      </div>
      <ul className={classes.list}>
        {sortedQuests.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
