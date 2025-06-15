import React from "react";
import "./ProjectExplorer.css";

const ProjectExplorer: React.FC = () => (
  <div className="project-explorer">
    <div className="empty-state">
      <span role="img" aria-label="blank canvas">🖼️</span>
      <p>Your project is a blank canvas! Start chatting to add files.</p>
    </div>
    {/* Later: List files/folders here */}
  </div>
);

export default ProjectExplorer;