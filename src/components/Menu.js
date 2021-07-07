import React from "react";
import styled from "styled-components";
import { GitHub } from "@material-ui/icons";
import LanguageIcon from "@material-ui/icons/Language";

const Menu = ({ menuItem }) => {
  return (
    <MenuItemStyled>
      {menuItem.map((item) => {
        return (
          <div className="grid-item" key={item.id}>
            <div className="portfolio-content">
              <div className="portfolio-image">
                <img src={item.image} alt="" />
                <ul>
                  <li>
                    <a href={item.link1}>
                      <GitHub />
                    </a>
                    <a href={item.link2}>
                      <LanguageIcon />
                    </a>
                  </li>
                </ul>
              </div>
              <h6>{item.title}</h6>
            </div>
          </div>
        );
      })}
    </MenuItemStyled>
  );
};

const MenuItemStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  @media screen and (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 670px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .grid-item {
    .portfolio-content {
      display: block;
      position: relative;
      overflow: hidden;
      h6 {
        font-size: 1.5rem;
      }
      img {
        width: 100%;
        height: 30vh;
        object-fit: cover;
      }
      ul {
        display: none;
        transform: translateY(-100);
        transition: all 0.4s ease-in-out;
        position: absolute;
        left: 33%;
        top: 32%;
        li {
          background-color: var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin: 0 0.5rem;
          padding: 0.5rem;
          transition: all 0.4s ease-in-out;
          &:hover {
            background-color: var(--primary-color);
          }
          a {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }

      .portfolio-image {
        &::before {
          content: "";
          position: absolute;
          left: 15px;
          top: 15px;
          height: 0;
          width: 0;
        }
      }

      .portfolio-image:hover {
        ul {
          transform: translateY(0);
          display: none;

          transition: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease-in-out;

          li:hover {
            svg {
              color: var(--white-color);
            }
          }
          svg {
            font-size: 2rem;
          }
        }
        &::before {
          height: 26vh;
          width: calc(100% - 30px);
          background-color: white;
          opacity: 0.9;
          transform-origin: 0;
          transform: scale(1);
          transition: all 0.1s ease-in-out;
        }
      }
    }
  }
`;

export default Menu;
