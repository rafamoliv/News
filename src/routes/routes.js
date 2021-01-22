import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import Classified from "../pages/Classified";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/classified" component={Classified} />
    </BrowserRouter>
  );
}
