import { css, cx } from "@linaria/core";
import { FunctionComponent, ReactNode } from "react";
import NextLink from "next/link"

export interface LinkProps {
    children: ReactNode;
    inverted?: boolean;
    className?: string;
    href: string;
}

// Example with css method
const linkStyle = css`
    cursor: pointer;
    font-family: sans-serif;
    text-decoration: none;
    color: var(--link-color)
`

export const Link: FunctionComponent<LinkProps> = ({ children, inverted, className, href }) => {
    return <NextLink href={href} className={cx(linkStyle, className)} style={{ "--link-color": inverted ? "white" : "#007bc8" }}>{children}</NextLink>
}