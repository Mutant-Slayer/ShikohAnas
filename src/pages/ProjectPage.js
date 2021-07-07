import React from "react";
import { InnerLayout, MainLayout } from "../styles/Layouts";
import Title from "../components/Title";
import portfolios from "../data/portfolio";
import Menu from "../components/Menu";

const ProjectPage = () => {
  const menuItem = portfolios;

  return (
    <MainLayout>
      <Title title={"Project"} span={"Project"} />
      <InnerLayout>
        <Menu menuItem={menuItem} />
      </InnerLayout>
    </MainLayout>
  );
};

export default ProjectPage;
