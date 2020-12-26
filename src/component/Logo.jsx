import React, { Component } from "react";
import styled from "styled-components";

import logo from "./react-1.svg";

const Wrapper = styled.a.attrs({
  className: "navbar-brand"
})``;

class Logo extends Component {
  render() {
    return (
      <Wrapper href="react-1.svg">
        <img src={logo} width="50" height="50" alt="sambarros.com" />
      </Wrapper>
    );
  }
}

export default Logo;
