import {Route, Redirect} from "react-router-dom"
import ApplicationViews from "./AppliationViews"
import NavBar from "./nav/NavBar"
import Login from "./auth/Login"
import Register from "./auth/Register"
import "./Tavern.css"

export default () => (
  <>
      <Route render={() => {
          if (localStorage.getItem("currentUserId")) {
              return (
                  <>
                      <Route render={props => <NavBar {...props} />} />
                      <Route render={props => <ApplicationViews {...props} />} />
                  </>
              )
          } else {
              return <Redirect to="/login" />
          }
      }} />

      <Route path="/login" render={props => <Login {...props} />} />
      <Route path="/register" render={props => <Register {...props} />} />
  </>
)