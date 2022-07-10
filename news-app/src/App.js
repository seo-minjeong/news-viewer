import React, { useState, useCallback } from "react";
import { Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

const App = () => {
  // ?는 값이 선택적이라는 의미. url 파라미터가 없다면 전체 카테고리를 선택한 것으로 간주.
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;
