import { useEffect, useState } from "react";
import Article from "./Article";
import styled from "styled-components";

const StyledContainer = styled.section`
  display: flex;
  gap: 20px;
  justify-content: space-around;
  padding: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export function App() {
  const data = [
    {
      number: "140",
      icon: "school",
      detail: "Heading 1",
    },
    {
      number: "3",
      icon: "visibility",
      detail: "Heading 2",
    },
    {
      number: "30",
      icon: "child_care",
      detail: "Heading 2",
    },
  ];

  return (
    <StyledContainer>
      {data.map((dataSet) => (
        <Article
          number={dataSet.number}
          icon={dataSet.icon}
          detail={dataSet.detail}
        ></Article>
      ))}
    </StyledContainer>
  );
}
