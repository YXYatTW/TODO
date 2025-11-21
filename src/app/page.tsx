'use client';

import styled from 'styled-components';
import {Card} from "@/components/Card";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default function Home() {
  return (
    <Wrapper>
      <Title>
        Hello World!
      </Title>
        <Card/>
    </Wrapper>
  );
}
