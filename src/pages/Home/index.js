import * as React from "react";
//* components
import Container from "../../components/Container";
import Jumbotron from "../../components/Jumbotron";
import About from "../../components/About";
import Skill from "../../components/Skill";
import Project from "../../components/Project";


const Home = () => {
  return (
    <Container styling="mt-20 grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-9 overflow-hidden">
      {/* Jumbotron */}
      <Jumbotron/>
      {/* about */}
      <About/>
      {/* Skillset */}
      <Skill/>
      {/* Project */}
      <Project/>
    </Container>
  );
};

export default Home;
