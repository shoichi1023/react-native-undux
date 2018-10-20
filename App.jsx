import React from "react";
import { addNavigationHelpers } from "react-navigation";
import PageNation from "./pageNation";
import Store from "./Store";

class App extends React.Component {
  render() {
    return (
      <PageNation
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener
        })}
      />
    );
  }
}

class Root extends React.Component {
  render() {
    return (
      <Store.Container>
        <App />
      </Store.Container>
    );
  }
}

export default Root;
