import { CSS } from "../../styles/Theme.provider";
import { SkeletonWrapper } from "./styles";

interface SkeletonProps {
  width?: string;
  height?: string;
  css?: CSS;
}

function Skeleton({ width = "300px", height = "40px", css }: SkeletonProps) {
  return <SkeletonWrapper css={{ ...css, width, height }}></SkeletonWrapper>;
}

export default Skeleton;
