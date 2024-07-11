import { Link } from 'react-router-dom';
import notFoundImg from '../assets/not-found.avif';

function NotFound() {
  return (
    <div className="not-found">
      <h1>OOPS! This page is not found...</h1>
      <img src={notFoundImg} alt="Not found" />
      <Link to="/">Go back</Link>
    </div>
  );
}

export default NotFound;
