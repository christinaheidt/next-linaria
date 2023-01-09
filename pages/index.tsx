import { styled } from '@linaria/react'
import Head from 'next/head'
import { Button } from '../components/button'

const Title = styled.h1`
  font-weight: bold;
  font-family: sans-serif;
`

const FlexContainer = styled.div`
  display: flex;
  gap: 12px;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Next with Linaria</title>
      </Head>
      <main>
        <Title>Linaria Sample</Title>
        <FlexContainer>
          <Button variant='primary'>Primary</Button>
          <Button variant='primary'>Primary</Button>
          <Button variant='primary'>Primary</Button>
          <Button variant='standard'>Standard</Button>
        </FlexContainer>
      </main>
    </>
  )
}
