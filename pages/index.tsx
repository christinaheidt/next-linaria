import { styled } from '@linaria/react'
import Head from 'next/head'
import { Button, ButtonProps } from '../components/button'
import { Link } from '../components/link'

const Title = styled.h1`
  font-weight: bold;
  font-family: sans-serif;
  margin-bottom: 4px;
`

const FlexContainer = styled.div`
padding-top: 40px;
  display: flex;
  gap: 12px;
`

// Example how to overwrite a style of a component
const StyledButton = styled(Button)`
  background-color: #007bc8;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Next with Linaria</title>
      </Head>
      <main>
        <Title>Linaria Sample</Title>
        <Link href="/">Home</Link>
        <FlexContainer>
          <Button variant='primary'>Primary</Button>
          <Button variant='primary'>Primary</Button>
          <Button variant='standard'>Standard</Button>
          <StyledButton variant='primary'>Styled Override of Button</StyledButton>
        </FlexContainer>
      </main>
    </>
  )
}
