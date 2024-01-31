import { BasePage } from "@/components/BasePage";
import { ExperienceContainer } from "@/components/Experience";
import { HeightContainer } from "@/components/HeightContainer";
import { Title } from "@/components/Title";

const Experience = () => {
  return (
    <BasePage>
      <Title>Experience</Title>
      <HeightContainer>
        <ExperienceContainer />
      </HeightContainer>
    </BasePage>
  );
};

export default Experience;
