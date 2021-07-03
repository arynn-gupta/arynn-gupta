import React from "react";
import styled from "styled-components";
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from "react-icons/md";
import SectionTitle from "./SectionTitle";
import ServicesSectionItem from "./ServicesSectionItem";

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  overflow: hidden;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle heading="Services" subheading="What can I do for you " />
        <div className="services__allItems">
          <div data-aos="fade-right">
            <ServicesSectionItem
              icon={<MdDesktopMac />}
              title="Web Design"
              desc="I do UI/UX design for the website that helps website to get a unique look."
            />
          </div>
          <div>
            <ServicesSectionItem
              icon={<MdCode />}
              title="Web Development"
              desc="I also develop the websites.I create high performance website with blazing fast speed."
            />
          </div>
          <div data-aos="fade-left">
            <ServicesSectionItem
              icon={<MdPhonelinkSetup />}
              title="App development"
              desc="I develop mobile application. I create mobile app with eye catching ui."
            />
          </div>
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
