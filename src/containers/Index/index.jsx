import { HashRouter, Route } from "react-router-dom";
import HomeHeader from "../../components/Home/HomeHeader";
import HomeFooter from "../../components/Home/HomeFooter";
import Home from "../Home";
import Blog from "../Blog";
import About from "../About";

function Index() {
  return (
    <>
      <HashRouter>
        <div>
          <HomeHeader />
          <div className="middle">
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/about" component={About} />
          </div>
          <HomeFooter />
        </div>
      </HashRouter>
    </>
  );
}

export default Index;
