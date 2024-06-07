import { useEffect, useState, useContext } from "react";
import mydata from "./Components";
import ErrorPage from "./pages/ErrorPage";
import ShowDataPage from "./pages/ShowDataPage";
import userContext from "./utils/UserContext"
import Api from "./utils/Api"
function App() {
  const { isData } = useContext(userContext);

  return (
    <>
  <Api/>
      {isData ? (
        <ShowDataPage />
      ) : (
        <ErrorPage />
      )}
    </>
  );
}

export default App;

