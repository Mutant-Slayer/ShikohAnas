import React from "react";
import styled from "styled-components";
import resume from "../images/resume.jpg";
import PrimaryButton from "./PrimaryButton";

const ImageSection = () => {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="resume_image" />
      </div>
      <div className="right-content">
        <h4>
          I am <span>Md Anas Shikoh</span>
        </h4>
        <p className="paragraph">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name </p>
            <p>Age</p>
            <p>Service</p>
          </div>
          <div className="info">
            <p>: Md Anas Shikoh</p>
            <p>: 20</p>
            <p>: FrontEnd Developer</p>
          </div>
        </div>
        <PrimaryButton title={"Download CV"} />
      </div>
    </ImageSectionStyled>
  );
};

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      width: 90%;
      object-fit: cover;
    }
  }
  .right-content {
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;

export default ImageSection;
