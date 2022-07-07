import React, { useState } from "react";
import axios from "axios";
import NewsList from "./components/NewsList";

const App = () => {
  return <NewsList />;
  // const [data, setData] = useState(null);
  // const onClick = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://newsapi.org/v2/top-headlines?country=kr&apiKey=ad622cc16a5a464980d02dbd20f8540d"
  //     );
  //     setData(response.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
};

export default App;
