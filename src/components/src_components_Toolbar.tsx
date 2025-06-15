import React from "react";
import "./Toolbar.css";

export default function Toolbar({
  darkMode,
  setDarkMode
}: {
  darkMode: boolean,
  setDarkMode: (v: boolean) => void
}) {
  return (
    <header className="toolbar">
      <img src="/logo.svg" alt="Build Logo" className="logo" />
      <h1>Build</h1>
      <div className="toolbar-actions">
        <button title="Run (Coming Soon)" disabled>
          <span role="img" aria-label="run">🚀</span>
        </button>
        <button title="Download Project">
          <span role="img" aria-label="download">☁️</span>
        </button>
        <button
          className="theme-toggle"
          title="Toggle light/dark mode"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "🌙" : "🌞"}
        </button>
      </div>
    </header>
  );
}