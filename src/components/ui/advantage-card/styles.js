import styled from "styled-components";
import { Img, P } from "/src/components/styled";

export const StyledCard = styled.article`
  width: 540px;
  min-height: 197px;
  padding: 20px;
  background-color: ${(props) =>
    props.isNegative
      ? props.theme.colorForCardNegative
      : props.theme.colorForCardPositive};
  box-sizing: border-box;
`;

export const CardHeader = styled.header`
  display: flex;
  margin-bottom: ${(props) => props.theme.indent};
  text-align: left;
`;

export const Image = styled(Img)`
  width: 56px;
  height: 56px;
  margin-right: ${(props) => props.theme.indent};
`;

export const Owner = styled.span`
  display: inline-block;
  min-height: 25px;
  margin-bottom: 4px;
  /* margin-left: ${(props) => props.indent}; */
  padding-left: 10px;
  padding-right: 10px;
  font-size: 14px;
  line-height: 25px;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) =>
    props.isNegative
      ? props.theme.colorCardOwnerNegative
      : props.theme.colorCardOwner};
`;

export const CardText = styled(P)`
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 27px;
  margin: 0;
  text-align: left;
`;
