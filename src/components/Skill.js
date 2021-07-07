import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../components/Title";
import ProgressBar from "./ProgressBar";

const Skill = () => {
  return (
    <SkillStyled>
      <Title title={"My Skills"} span={"My Skills"} />
      <InnerLayout>
        <div className="skills">
          <ProgressBar title={"HTML5"} width={"70%"} text={"70%"} />
          <ProgressBar title={"CSS3"} width={"70%"} text={"70%"} />
          <ProgressBar title={"Javascript"} width={"40%"} text={"40%"} />
          <ProgressBar title={"C++"} width={"70%"} text={"70%"} />
          <ProgressBar title={"React Js"} width={"40%"} text={"40%"} />
          <ProgressBar title={"Python"} width={"60%"} text={"60%"} />
          <ProgressBar title={"Django"} width={"20%"} text={"20%"} />
        </div>
      </InnerLayout>
    </SkillStyled>
  );
};

const SkillStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Skill;
