/** @format */

import { Fragment, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "./custom.styles.scss";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

const Landing = lazy(() => import("./pages/landing/Landing"));
const About = lazy(() => import("./pages/about/about.component"));
const Contact = lazy(() => import("./pages/contact/contact.component"));
const Sector = lazy(() => import("./pages/sector/Sector"));
const Terrain = lazy(() => import("./pages/Terrain/Terrain"));
const Data_Processing = lazy(() =>
  import("./pages/data-processing/data-processing.component")
);
const Survey = lazy(() => import("./pages/survey/survey.component"));
const Stigmi = lazy(() => import("./pages/stigmi/stigmi.component"));
const Selectedsector = lazy(() =>
  import("./pages/SelectedSector/Selectedsector")
);
const AdminPanel = lazy(() => import("./pages/Admin/AdminPanel"));

function App() {
  const Loader = () => {
    return (
      <div className="home-loader-container">
        <div class="home-loader-spinner"></div>
      </div>
    );
  };
  return (
    <Fragment>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/sector/:id" exact component={Sector} />
          <Route path="/terrain" exact component={Terrain} />
          <Route path="/data_processing" exact component={Data_Processing} />
          <Route path="/survey" exact component={Survey} />
          <Route path="/stigmi" exact component={Stigmi} />
          <Route path="/read/sector/" exact component={Selectedsector} />
          <Route path="/admin" exact component={AdminPanel} />
        </Switch>
      </Suspense>
      <Footer />
    </Fragment>
  );
}
export default App;
