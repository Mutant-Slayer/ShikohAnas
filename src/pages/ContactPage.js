import React from "react";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../components/Title";
import styled from "styled-components";
import PrimaryButton from "../components/PrimaryButton";
import { Phone } from "@material-ui/icons";
import { Email } from "@material-ui/icons";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactItem from "../components/ContactItem";

const ContactPage = () => {
  const phone = <Phone />;
  const email = <Email />;
  const location = <LocationOnIcon />;
  return (
    <MainLayout>
      <Title title={"Contact"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          <div className="left-content">
            <div className="contact-title">
              <h4>Get In Touch</h4>
            </div>
            <form className="form">
              <div className="form-field">
                <label htmlFor="name">Enter your name</label>
                <input type="text" id="name" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Enter your email</label>
                <input type="email" id="email" />
              </div>
              <div className="form-field">
                <label htmlFor="subject">Enter your subject</label>
                <input type="text" id="subject" />
              </div>
              <div className="form-field">
                <label htmlFor="text-area">Enter your Message</label>
                <textarea
                  name="textarea"
                  id="textarea"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="form-field f-button">
                <PrimaryButton title={"Send Email"} />
              </div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem
              title={"Phone"}
              icon={phone}
              contact1={"9576337866"}
              contact2={"6205507236"}
            />
            <ContactItem
              title={"Email"}
              icon={email}
              contact1={"anasshikoh786@gmail.com"}
              contact2={"md.s.ug18.cs@nitp.ac.in"}
            />
            <ContactItem
              title={"Address"}
              icon={location}
              contact1={
                "56 Set, Chamaniya Maidan, Rahmat Colony, Doranda, Ranchi"
              }
              contact2={"Alo Babu Road, Bhadauni Sharif, Nawada"}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
};

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 3rem;
      }
    }
    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      @media screen and (max-width: 502px) {
        width: 70%;
      }
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
  }
  .form {
    width: 100%;
    @media screen and (max-width: 502px) {
      width: 100%;
    }
    .form-field {
      margin-top: 2rem;
      position: relative;
      width: 100%;
      label {
        position: absolute;
        left: 20px;
        top: -19px;
        display: inline-block;
        background-color: var(--background-dark-color);
        padding: 0 0.5em;
        color: inherit;
      }
      input {
        border: 1px solid var(--border-color);
        outline: none;
        background: transparent;
        height: 50px;
        padding: 0 15px;
        width: 100%;
        color: inherit;
      }
      textarea {
        background-color: transparent;
        border: 1px solid var(--border-color);
        outline: none;
        color: inherit;
        width: 100%;
        padding: 0.8rem 1rem;
      }
      .f-button {
        margin-bottom: 2rem;
      }
    }
  }
`;

export default ContactPage;
