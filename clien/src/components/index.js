import React, { Component } from "react";
import TinyComponent from "./TinyComponent";
class ItemComponent extends Component {
  state = { id: "", title: "", content: "", textSearch: "" };
  handleClear = () => {
    this.setState({ id: "", title: "", content: "" });
  };
  render() {
    let listData = [];
    if (this.props.items) {
      listData = this.props.items.map((item, index) => {
        return (
          <tr key={index}>
            <th>{index + 1}</th>
            <th>{item.title}</th>
            <th>
              <span dangerouslySetInnerHTML={{ __html: item.content }}></span>
            </th>
            <th>
              <button
                onClick={() => {
                  this.props.deleteItem({ id: item._id });
                }}
              >
                DELETE
              </button>
            </th>
            <th>
              <button
                onClick={() => {
                  this.setState({
                    id: item._id,
                    title: item.title,
                    content: item.content,
                  });
                }}
              >
                SELECT
              </button>
            </th>
          </tr>
        );
      });
    }
    return (
      <div>
        <div>
          <table>
            <tbody>
              <tr>
                <th>STT</th>
                <th>Content</th>
              </tr>
              {listData}
            </tbody>
          </table>
        </div>
        <TinyComponent
          addItem={this.props.addItem}
          updateItem={this.props.updateItem}
          searchItem={this.props.searchItem}
          id={this.state.id}
          title={this.state.title}
          content={this.state.content}
          textSearch={this.state.textSearch}
          handleClear={this.handleClear}
        />
      </div>
    );
  }
}

export default ItemComponent;
