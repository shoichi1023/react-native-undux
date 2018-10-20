import React from "react";
import PageNation from "./pageNation";
import Store from "./Store";

class App extends React.Component {
  render() {
    return (
      <Store.Container>
        <PageNation />
      </Store.Container>
    );
  }
}

export default App;
