import * as React from "react";
import Typewriter from "typewriter-effect";

export default function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Web Developer", "Project Manager", "UI/UX Designer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 70,
      }}
    />
  );
}
