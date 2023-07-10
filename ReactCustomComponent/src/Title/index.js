import styled from "@emotion/styled";

const Title = styled.h1`
  font-size: ${({ fontSize }) => fontSize || "24px"};
  color: ${({ color }) => color || "#fff"};
  padding: ${({ padding }) => padding};
  letter-spacing: 1px;
  ${({ centered }) => centered && "text-align: center"};
`;

export default Title;
