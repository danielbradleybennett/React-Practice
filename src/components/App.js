import React from "react"
import { Route, Redirect } from "react-router-dom"
// import ApplicationViews from "./ApplicationViews"
import NavBar from "./Nav/NavBar"
import "./App.css"

export default () => (
  <>
    <Route render={() => {
      return (
        <>
          <Route render={props => <NavBar {...props} />} />
          {/* <Route render={props => <ApplicationViews {...props} />} /> */}
        </>
      )

    }} />

  </>
)

