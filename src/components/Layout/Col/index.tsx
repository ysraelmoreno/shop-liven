import { ForwardedRef, forwardRef, HTMLAttributes } from "react";
import { CSS } from "../../../styles/Theme.provider";
import { Wrapper, WrapperVariants } from "./styles";

export type ColProps = {
  children: React.ReactNode;
  css?: CSS;
} & WrapperVariants &
  HTMLAttributes<HTMLDivElement>;

const Col = forwardRef(
  (
    { sm, md, lg, css, children, ...props }: ColProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => (
    <Wrapper sm={sm} md={md} lg={lg} ref={ref} css={css} {...props}>
      {children}
    </Wrapper>
  )
);

export default Col;
