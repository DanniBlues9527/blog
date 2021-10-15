import { Route } from "react-router-dom";
import BlogIndex from "../../components/Blog/BlogIndex";
import Article from "../../components/Article/Article";

function Blog(props) {
  return (
    <div>
      <Route exact path="/blog" component={BlogIndex} />
      <Route path="/blog/article/:number" component={Article} />
    </div>
  );
}

export default Blog;
