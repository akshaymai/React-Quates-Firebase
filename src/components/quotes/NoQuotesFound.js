import { Link } from 'react-router-dom';
import classes from './NoQuotesFound.module.css';

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <Link to="/add/queots" className="btn">
      Add a Quote
      </Link>
      {/* <a className='btn'>
 
      </a> */}
    </div>
  );
};

export default NoQuotesFound;
