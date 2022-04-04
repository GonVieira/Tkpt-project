import React from 'react';
import "./App.css";
import Header from "./client/Components/Header";
import {Outlet} from "react-router";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);


  return (
    <>
      <div className="App">
        <Header />
        <Outlet />
        {/*<p>{!data ? "Loading..." : data}</p>*/}
      </div>
    </>
  );
}

export default App;
