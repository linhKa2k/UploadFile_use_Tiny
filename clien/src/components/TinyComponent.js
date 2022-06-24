import React, { Component } from "react";
import { Editor } from "@tinymce/tinymce-react";
var arrNameImg = [];
export default class TinyComponent extends Component {
  state = { id: "", title: "", content: "", textSearch: "" };
  componentDidUpdate() {
    if (this.props.id !== this.state.id) {
      this.setState({
        id: this.props.id,
        title: this.props.title,
        content: this.props.content,
        textSearch: this.props.textSearch,
      });
    }
  }
  render() {  
    return (
      <div>
        <div> 
          <input
            onChange={(e) => {
              this.setState({ title: e.target.value });
            }}
            value={this.state.title}
          />
          <button
            onClick={() => {
              this.props.addItem({
                arrNameImg,
                title: this.state.title,
                content: this.state.content,
              });
              this.setState({ title: "", content: "" });
            }}
          >
            ADD
          </button>
          <button
            onClick={() => {
              this.props.updateItem({
                id: this.state.id,
                title: this.state.title,
                content: this.state.content,
              });
              this.props.handleClear();
            }}
          >
            UPDATE
          </button>
        </div>
        <div>
          <input
            onChange={(e) => {
              this.setState({ textSearch: e.target.value });
            }}
          />
          <button
            onClick={() => {
              this.props.searchItem({ title: this.state.textSearch });
            }}
          >
            SEARCH
          </button>
        </div> 
        <Editor
          apiKey="znpuq7j2yaeh81cu1qnji7lgwuk37vrh98wvrxs01b3yp5qv"
          onEditorChange={(text) => {
            this.setState({ content: text });
          }}
          value={this.state.content}
          init={{
            height: 300,
            width: 800,
            menubar: false,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "preview",
              "help",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat |image help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            images_upload_handler: async function (blobInfo, success, failure) {
              var url = "http://localhost:3001/image-tiny";
              var response; 
              var form = new FormData();
              form.append("img", blobInfo.blob());
              try {
                response = await fetch(url, { method: "POST", body: form });
                var res = await response.json();
                success(res.arrImg[0]);
                arrNameImg.push(res.arrNameImg[0]);
              } catch (error) {
                failure("Invalid JSON: " + response);
              }
            },
          }}
        />
      </div>
    );
  }
}
