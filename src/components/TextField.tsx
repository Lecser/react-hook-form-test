import React, { FC, InputHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { ReactComponent as EyeIcon } from "../assets/Eye.svg";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  showPassword?: () => void;
  textFieldMode: "outlined" | "nonOutlined";
}

interface StyledInputProps {
  nonOutlined?: boolean;
}

const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  font-size: 16px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  height: 36px;
  background-color: transparent;
  transition: 0.3s;
  font-weight: bold;

  &:focus {
    outline: none;
    border: 2px solid #1a73a8;
  }

  ${(props) =>
    props.nonOutlined &&
    css`
      border: none;
      border-bottom: 2px solid #e0e0e0;
      height: 100%;
      &:focus {
        outline: none;
        border: none;
        border-bottom: 2px solid #1a73a8;
      }
    `}
`;

const StyledShowPasswordIcon = styled(EyeIcon)`
  cursor: pointer;
  position: relative;
  left: 369px;
  top: -28px;
  &:hover {
    opacity: 0.9;
  }
`;

export const TextField: FC<TextFieldProps> = ({
  showPassword,
  textFieldMode,
  ...restProps
}) => {
  return (
    <div>
      <StyledInput
        nonOutlined={textFieldMode === "nonOutlined"}
        {...restProps}
      />
      {showPassword ? <StyledShowPasswordIcon onClick={showPassword} /> : ""}
    </div>
  );
};
