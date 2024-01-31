import { BasePage } from "@/components/BasePage";
import classNames from "./projects.module.scss";
import { Title } from "@/components/Title";
import { ProjectsContainer, ScrollDown } from "@/components/ProjectsContainer";
import { HeightContainer } from "@/components/HeightContainer";

const Projects = () => {
  
  return (
    <BasePage
      classNames={{
        introClassName: classNames.expIntro,
        animationClassName: classNames.allowOverFlow,
      }}
    >
      <Title>Projects</Title>
      <HeightContainer>
        <ProjectsContainer />
        <ScrollDown/>
      </HeightContainer>
    </BasePage>
  );
};

export default Projects;
