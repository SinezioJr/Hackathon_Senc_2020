import styled from "styled-components";

export const Inputs = styled.div`
  position: relative;
  text-align: left;
  margin: 20px 10px;
  :focus {
    outline: none;
  }
  input {
    border: 0;
    padding: 4px 0;
    border-bottom: 1px solid #ccc;
    background-color: transparent;
    font: 15px/24px "Lato", Arial, sans-serif;
    color: #333;
    width: 100%;
    box-sizing: border-box;
    letter-spacing: 1px;
  }
  input:focus {
    ~ .focus-border {
      width: 100%;
      transition: 0.4s;
      left: 0;
    }
    ~ label {
      top: -16px;
      font-size: 12px;
      color: #1d4657;
      transition: 0.3s;
    }
  }
  input ~ .focus-border {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #1d4657;
    transition: 0.4s;
  }
  label {
    position: absolute;
    left: 0;
    width: 100%;
    top: 9px;
    color: #aaa;
    transition: 0.3s;
    z-index: -1;
    letter-spacing: 0.5px;
  }
`;

export const Buttons = styled.button`
  margin: 8px auto;
  text-align: center;

  max-width: 300px;
  width: 100%;
  background: #1d4657;
  box-sizing: border-box;
  border-radius: 4px;
  height: 47px;
  cursor: pointer;

  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;
