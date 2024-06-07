import { useEffect, useState, useContext } from "react";
import mydata from "./Components";
import ErrorPage from "./pages/ErrorPage";
import ShowDataPage from "./pages/ShowDataPage";
import userContext from "./utils/UserContext"
import Api from "./utils/Api"
import Loading from "./pages/Loading";
function App() {
  const { isData,isLoading  , myTemp} = useContext(userContext);

  return (
    <>
  <Api/>
      {myTemp ==='' ? (
      <Loading/>
      ) : (
        <ShowDataPage /> 
      )
      }
    </>
  );
}

export default App;

