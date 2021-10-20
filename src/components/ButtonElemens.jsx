import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Button = styled(LinkS)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline:none;
  border:none;
  display:flex;
  justify-content:center;
  align-items:center;
  transition: all .3s ease-out;
  text-decoration: none;
  max-width:210px;
  cursor:pointer;

  &:hover{
    transition: all .2s easy-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
  }
`;
