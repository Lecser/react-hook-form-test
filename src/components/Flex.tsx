import React, { FC } from "react";
import styled from "styled-components";

type StyledFlexPropsType = {
  direction?: string;
  justify?: string;
  align?: string;
  children: React.ReactNode;
};

const StyledFlex = styled.div<StyledFlexPropsType>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "start"};
`;

export const Flex: FC<StyledFlexPropsType> = ({ children }, ...restProps) => {
  return <StyledFlex {...restProps}>{children}</StyledFlex>;
};
