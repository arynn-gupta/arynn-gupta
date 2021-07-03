import React from "react";
import styled from "styled-components";
import FooterCol from "./FooterCol";
import PText from "./PText";

const FooterStyles = styled.div`
  background-color: var(--deep-dark);
  overflow: hidden;
  .container {
    display: flex;
    gap: 3rem;
  }
  .foter__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .top__line {
    top: 0px;
    background-color: var(--accent);
    height: 0.2rem;
    margin-bottom: 5rem;
    &::before {
      content: '';
      width: 40%;
      height: 0;
      border-width: 5px 5px 0 5px;
      border-style: solid;
      border-color: var(--accent) transparent var(--accent) var(--accent);
      position: absolute;
      left: 0;
    }
  }
  .bottom__line {
    transform: rotate(-180deg);
    top: 0px;
    background-color: var(--accent);
    height: 0.2rem;
    margin-top: 2rem;
    &::before {
      content: '';
      width: 40%;
      height: 0;
      border-width: 5px 5px 0 5px;
      border-style: solid;
      border-color: var(--accent) transparent var(--accent) var(--accent);
      position: absolute;
    }
  }
  .copyright {
    opacity: 0.8;
    background: transparent;
    text-align: left;
    padding: 1rem 0;
    .container {
      p {
        font-family: 'Ginger Regular';
        color: #7f7f7f;
        font-size: 1.2rem;
        margin-left: 0;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="top__line" data-aos="fade-right" />
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Aryan Gupta</h1>
          <PText>
            A freelance web designer and developer from Uttar Pradesh, India. I always make website
            that have unique designs and also has a good performance rate.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                title: 'About',
                path: '/About',
                type: 'Link',
              },
              {
                title: 'Projects',
                path: '/Projects',
                type: 'Link',
              },
              {
                title: 'Contact',
                path: '/Contact',
                type: 'Link',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+91 6387947783',
                path: 'tel:+91 6387947783',
              },
              {
                title: 'arynn.gupta@gmail.com',
                path: 'mailto:arynn.gupta@gmail.com',
              },
              {
                title: 'Kanpur, Uttar Pradesh, India',
                path: 'https://goo.gl/maps/uT96rCFYPj12EdKy6',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Facebook',
                path: 'http://facebook.com/arynn.gupta',
              },
              {
                title: 'Instagram',
                path: 'http://instagram.com/arynn.gupta',
              },
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/aryan-gupta-83a81518b/',
              },
              {
                title: 'Github',
                path: 'https://github.com/arynn-gupta',
              },
            ]}
          />
        </div>
      </div>
      <div className="bottom__line" />
      <div className="copyright">
        <div className="container">
          <p>© 2021-22 Aryan Gupta | Designed By Aryan</p>
        </div>
      </div>
    </FooterStyles>
  );
}
