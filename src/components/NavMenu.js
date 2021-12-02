import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';

const NavMenuStyles = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: var(--dark-bg);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  ul {
    gap: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--deep-dark);
      }
    }
    a {
      display: inline-block;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-family: 'Ginger Bold';
      padding: 1rem 2rem;
      font-size: 1.8rem;
      color: var(--gray-1);
      outline: none;
    }
    .active {
      color: var(--accent);
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 2rem;
    top: 1.5rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  .navItems .closeNavicon {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item {
      clip-path: circle(0px at 100% 0) !important;
      -webkit-clip-path: circle(0px at 100% 0) !important;
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
      background-color: var(--deep-dark);
      width: 100vw;
      height: 100vh;
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      clip-path: circle(150vh at 100% 0%);
      -webkit-clip-path: circle(150vh at 100% 0%);
      transition: all 1s ease-out;
      .closeNavicon {
        position: fixed;
        right: 2rem;
        top: 1.5rem;
        width: 4rem;
        display: block;
        outline: none;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
    ul li:hover ~ .cursor {
      transform: scale(2) translate(-25%, -25%);
    }
  }
`;

export default function NavMenu() {
  const [showNav, SetShowNav] = useState(false);
  return (
    <NavMenuStyles>
      <div
        className="mobile-menu-icon"
        onClick={() => SetShowNav(!showNav)}
        role="button"
        onKeyDown={() => SetShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>
      <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
        <div
          className="closeNavicon"
          onClick={() => SetShowNav(!showNav)}
          role="button"
          onKeyDown={() => SetShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li>
          <NavLink
            to="/"
            exact
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            {' '}
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Projects"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            {' '}
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/VFX"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            {' '}
            VFX
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/About"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            {' '}
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Contact"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            {' '}
            Contact
          </NavLink>
        </li>
      </ul>
    </NavMenuStyles>
  );
}
