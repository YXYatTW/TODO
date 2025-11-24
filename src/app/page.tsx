"use client";

import styled from "styled-components";
import StatusList from "@/components/StatusList";
import { allStatuses } from "@/data/types";

export default function Home() {
  return (
    <Wrapper>
      <Board>
        {allStatuses.map((status) => (
          <StatusList key={status} status={status} />
        ))}
      </Board>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  //background: papayawhip;
`;

const Board = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: flex-start;
`;
