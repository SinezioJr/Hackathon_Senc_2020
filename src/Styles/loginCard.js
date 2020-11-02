import styled from "styled-components";

export const Center = styled.div`
  position: relative;
  text-align: center;
  padding: 20px 0px;
  width: 100%;
`;

export const LoginCard = styled.div`
  position: relative;
  background: white;
  text-align: center;
  max-width: 500px;
  width: 100%;
  padding: 10px 40px;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  box-sizing: border-box;

  height: 550px;
  overflow: auto;
  left: 50%;
  transform: translate(-50%, 0%);
  img {
    width: 60%;
  }
`;
