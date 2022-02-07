import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
// import Addquotes from "./components/pages/addquotes";
// import AllQuotes from "./components/pages/allqueotes";
// import QueotesDetails from "./components/pages/quoetsdetails";
// import Notfound from "./components/pages/notfound";


const AllQuotes=React.lazy(()=>import("./components/pages/allqueotes"))
const Addquotes=React.lazy(()=>import("./components/pages/addquotes"))
const QueotesDetails=React.lazy(()=>import("./components/pages/quoetsdetails"))
const Notfound=React.lazy(()=>import("./components/pages/notfound"))

function App() {
  return (
    <div>
      <Layout>
        <Suspense fallback={
          <div className="centered">
             <LoadingSpinner/>
          </div>
        }> 
          <Switch>
            <Route path="/" exact>
              <Redirect to="/allquests" />
            </Route>
            <Route path="/allquests" component={AllQuotes} />
            <Route path="/add/queots" component={Addquotes} />
            <Route path="/queots/:id" component={QueotesDetails} />
            <Route path="*" component={Notfound} />
          </Switch>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
