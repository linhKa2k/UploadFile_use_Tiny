import React, { Component } from 'react';
import ItemContainer from "../containers/index"

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        {/* Call Container Here */}
        <ItemContainer />
      </div>
    );
  }
}

export default HomePage;
