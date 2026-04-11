"use client";

import { useEffect, useState } from "react";

const About = () => {
  const [name, setName] = useState("mohamed");
  useEffect(() => {
    console.log("Use Effect:", name);
  }, [name]);

  return (
    <div>
      <h2>About</h2>
      <input
        type="search"
        placeholder="Search by name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default About;
