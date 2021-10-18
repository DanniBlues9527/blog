import { Route } from "react-router-dom";
import Index from "../../components/Blog/Index";
import Article from "../../components/Article/Index";

function Blog(props) {
  return (
    <div>
      <Route exact path="/blog" component={Index} />
      <Route path="/blog/article/:number" component={Article} />
    </div>
  );
}

export default Blog;
