import React, { Component } from "react";
import { connect } from "react-redux";
import ItemComponent from "../components/index";
import * as actions from "../actions/index";

class ItemContainer extends Component {
  componentDidMount() {
    this.props.getItem();
  }
  render() {
    return <ItemComponent {...this.props} />;
  }
}
function mapStateToProps(state) {
  return {
    items: state.item.listItem,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getItem: () => {
      dispatch(actions.getItemRequest());
    },
    addItem: (data) => {
      dispatch(actions.addItemRequest(data));
    },
    deleteItem: (data) => {
      dispatch(actions.deleteItemRequest(data));
    },
    updateItem: (data) => {
      dispatch(actions.updateItemRequest(data));
    },
    searchItem: (data) => {
      dispatch(actions.searchItemRequest(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
