// RichTextEditor.jsx
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichTextEditor = () => {
  const [content, setContent] = useState("");

  const handleChange = (value) => {
    setContent(value);
  };

  return (
    <div className="richTextEditorContainer">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        The Rich Text Editor
      </h2>
      <ReactQuill
        theme="snow"
        value={content}
        onChange={handleChange}
        modules={{
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link"],
            ["clean"],
          ],
        }}
      />
    </div>
  );
};

export default RichTextEditor;
