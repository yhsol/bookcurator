import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 75%;
  margin: 50px auto;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  color: ${props => props.color};
  font-size: 26px;
  font-weight: 600;
`;

const ErrorMessage = ({ text, color }) => (
  <Container>
    <Text color={color}>{text}</Text>
  </Container>
);

ErrorMessage.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default ErrorMessage;
