import { HashRouter, Route } from "react-router-dom";
import Header from "../../components/Home/Header";
import Footer from "../../components/Home/Footer";
import Home from "../Home";
import Blog from "../Blog";
import About from "../About";

function Index() {
  return (
    <>
      <HashRouter>
        <div>
          <Header />
          <div className="middle">
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/about" component={About} />
          </div>
          <Footer />
        </div>
      </HashRouter>
    </>
  );
}

export default Index;
