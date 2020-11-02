import styled from "styled-components";

export const DasboardCard = styled.div`
  position: relative;
  background: #000;
  text-align: center;
  max-width: 1200px;
  width: 100%;
  padding: 10px 40px;
  background: #ffffff;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2), 0px 1px 18px rgba(0, 0, 0, 0.12),
    0px 6px 10px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  box-sizing: border-box;
  min-height: ${(props) => "calc(100vh - 85px)"};
  height: min-content;
  overflow: auto;
  left: 50%;
  transform: translate(-50%, 0%);
  img {
    width: 60%;
  }
`;

export const MinCard = styled.div`
  float: left;
  width: 156px;
  height: 140px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  color: #808080;
  margin: 5px 10px;
  .nuber {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    margin: 4px 0px;
    font-size: 24px;
    line-height: 36px;
  }

  .information {
    letter-spacing: 0.4px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    margin: 4px 0px;
  }

  .icon {
    width: 48px;
    height: 48px;
    margin-top: 20px;
    path {
      fill: #808080;
    }
  }
  :hover {
    background: #1d4657;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2), 0px 1px 18px rgba(0, 0, 0, 0.12),
      0px 6px 10px rgba(0, 0, 0, 0.14);
    border: none;
    color: #ffffff;
    .icon {
      path {
        fill: #ffffff;
      }
    }
  }
`;

export const GraphContainer = styled.div`
  width: 100%;
`;

export const Row = styled.div`
  display: inline-flex;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
`;
