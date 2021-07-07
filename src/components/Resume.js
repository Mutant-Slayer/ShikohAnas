import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import SmallTitle from "./SmallTitle";
import Title from "./Title";
import { School } from "@material-ui/icons";
import ResumeItem from "./ResumeItem";

const Resume = () => {
  const education = <School />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"Resume"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={education} title={"Education"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2006-2016"}
            title={"Matriculation"}
            subTitle={"St. Joseph's School"}
            text={"10.0 CGPA"}
          />
          <ResumeItem
            year={"2016-2018"}
            title={"Intermediate"}
            subTitle={"Delhi Public School"}
            text={"92.4 %"}
          />
          <ResumeItem
            year={"2018-Running"}
            title={"National Institute Of Technology, Patna"}
            subTitle={"B.Tech CSE"}
            text={"7.42 CGPA"}
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
};

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;

export default Resume;
