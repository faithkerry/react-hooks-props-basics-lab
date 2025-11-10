// src/components/Links.js
function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3> {/* this is required for the test */}
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer">
          {github}
        </a>
      )}
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          {linkedin}
        </a>
      )}
    </div>
  );
}

export default Links;
