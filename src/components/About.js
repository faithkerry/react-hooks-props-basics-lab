// src/components/About.js
import Links from "./Links";

function About({ bio, links }) {
  return (
    <div>
      {bio && bio.trim() !== "" && <p>{bio}</p>}
      {links && <Links {...links} />}
    </div>
  );
}

export default About;
