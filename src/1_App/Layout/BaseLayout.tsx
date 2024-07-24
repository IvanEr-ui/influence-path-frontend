import "./BaseLayout.css"

import { useRoutes } from "react-router-dom";
import ROUTES from "@shared/consts/routes"

import { MainPage } from "@pages/main"
import { SingInPage, SingUpPage } from "@pages/auth";


function App() {

  const element = useRoutes([
    { path: ROUTES.MAIN, element: <MainPage /> },
    { path: ROUTES.SIGN_UP, element: <SingUpPage /> },
    { path: ROUTES.SIGN_IN, element: <SingInPage /> },
  ])

  return <div className="container">{element}</div>;
}

export default App
