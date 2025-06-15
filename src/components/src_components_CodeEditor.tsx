import React, { useRef, useEffect } from "react";
import * as monaco from "monaco-editor";
import "./CodeEditor.css";

const CodeEditor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const monacoRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  useEffect(() => {
    if (editorRef.current && !monacoRef.current) {
      monacoRef.current = monaco.editor.create(editorRef.current, {
        value: "// Start building your Android app!\n",
        language: "java",
        theme: "vs-dark",
        automaticLayout: true,
        minimap: { enabled: false }
      });
    }
    return () => {
      monacoRef.current?.dispose();
    };
  }, []);

  return <div className="code-editor" ref={editorRef} />;
};

export default CodeEditor;