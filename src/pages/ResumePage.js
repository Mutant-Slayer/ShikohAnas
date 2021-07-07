import React from "react";
import Resume from "../components/Resume";
import Skill from "../components/Skill";
import { MainLayout } from "../styles/Layouts";

const ResumePage = () => {
  return (
    <MainLayout>
      <Skill />
      <Resume />
    </MainLayout>
  );
};

export default ResumePage;
