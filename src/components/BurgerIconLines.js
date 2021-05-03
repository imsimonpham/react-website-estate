import styled, { css } from "styled-components/macro";

const Lines = css`
  width: 30px;
  height: 3px;
  background-color: #fff;
  margin: 6px;
  transition: 0.6s ease;
`;
export const Line1 = styled.div`
  ${Lines}
`;
export const Line2 = styled.div`
  ${Lines}
  width: 20px;
`;
export const Line3 = styled.div`
  ${Lines}
  width: 10px;
`;
