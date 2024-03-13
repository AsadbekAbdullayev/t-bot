import styled from "styled-components";
import { ReactComponent as ArrowsLeftRight } from "../../assets/icons/ArrowsLeftRight.svg";
import { ReactComponent as ChartPieSlice } from "../../assets/icons/ChartPieSlice.svg";
import { ReactComponent as Frame } from "../../assets/icons/Frame.svg";
import { ReactComponent as Gauge } from "../../assets/icons/Gauge.svg";
import { ReactComponent as Stack } from "../../assets/icons/Stack.svg";

export const ArrowsLeftRightIcon = styled(ArrowsLeftRight)`
  width: 24px;
  height: 24px;
  path {
    /* stroke: ${({ color }) => color || "#fff"}; */
    stroke: ${({ active }) => (active ? "#7662ea" : "#000")};
  }
`;
export const ChartPieSliceIcon = styled(ChartPieSlice)`
  width: 24px;
  height: 24px;
  path {
    /* stroke: ${({ color }) => color || "#fff"}; */
    /* fill: ${({ active }) => (active ? "#7662ea" : "#000")}; */
    stroke: ${({ active }) => (active ? "#7662ea" : "#000")};
  }
`;
export const FrameIcon = styled(Frame)`
  width: 24px;
  height: 24px;
  path {
    /* stroke: ${({ color }) => color || "#fff"}; */
    stroke: ${({ active }) => (active ? "#7662ea" : "#000")};
  }
`;
export const GaugeIcon = styled(Gauge)`
  width: 24px;
  height: 24px;
  path {
    /* stroke: ${({ color }) => color || "#fff"}; */
    stroke: ${({ active }) => (active ? "#7662ea" : "#000")};
  }
`;
export const StackIcon = styled(Stack)`
  width: 24px;
  height: 24px;
  path {
    /* stroke: ${({ color }) => color || "#fff"}; */
    stroke: ${({ active }) => (active ? "#7662ea" : "#000")};
  }
`;
