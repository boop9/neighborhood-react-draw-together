import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <h1>
      <div>
        404 Not Found <Link to="/">Home</Link>
      </div>
      <a href="/">Home From A</a>
    </h1>
  );
};

export default NotFoundPage;
