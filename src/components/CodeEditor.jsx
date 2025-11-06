import Editor from "@monaco-editor/react";
import styles from "./CodeEditor.module.css";
const CodeEditor = () => {
  const handleEditorChange = (value, event) => {
    console.log("here is the current model value:", value);
    // alert(value);
  };

  return (
    <div className={styles.container}>
      <Editor
        height="20vh"
        defaultLanguage="java"
        defaultValue="// some comment"
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default CodeEditor;
