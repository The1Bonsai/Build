import React, { useState } from "react";
import ProjectExplorer from "./components/ProjectExplorer";
import CodeEditor from "./components/CodeEditor";
import ChatAssistant from "./components/ChatAssistant";
import Toolbar from "./components/Toolbar";
import "./styles/app.css";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Toolbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="main">
        <aside className="sidebar">
          <ProjectExplorer />
        </aside>
        <section className="editor-section">
          <CodeEditor />
        </section>
      </div>
      <footer className="chat-footer">
        <ChatAssistant />
      </footer>
    </div>
  );
};

export default App;