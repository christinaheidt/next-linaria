import { styled } from "@linaria/react";
import { FunctionComponent, ReactNode } from "react";

export interface ButtonProps {
    variant?: "primary" | "standard"
    children: ReactNode
    className?: string;
}

// Example with styled helper
const StyledButton = styled.button<ButtonProps>`
    font-family: sans-serif;
    display: flex;
    width: 100%;
    border-width: 1px;
    border-style: solid;
    border-radius: 3px;
    align-items: center;
    justify-content: center;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    padding: 7px 15px;
    color: ${({ variant }) => variant === "primary"
        ? "white"
        : "black"};
  background-color: ${({ variant }) => variant === "primary"
        ? "#444444"
        : "#EEEEEE"};
  border-color: rgba(0, 0, 0, 0.2);
`;

export const Button: FunctionComponent<ButtonProps> = ({ variant = "standard", children, className }) => {
    return <StyledButton className={className} variant={variant}>{children}</StyledButton>
}