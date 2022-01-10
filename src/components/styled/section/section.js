import styled from "styled-components";

const Section = styled.section`
  position: relative;
  display: flex;
  padding-top: 100px;
  padding-right: ${(props) => props.theme.pagePadding};
  padding-bottom: 100px;
  padding-left: ${(props) => props.theme.pagePadding};
  box-sizing: border-box;
  overflow: hidden;
`;

export default Section;
