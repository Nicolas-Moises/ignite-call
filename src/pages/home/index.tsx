import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Pattern, Preview } from './styles'

import previewImg from '../../assets/hero-preview.png'
import pattern from '../../assets/bg-pattern.png'
import Image from 'next/image'
import { ClainUserNameForm } from './components/ClaimUserNameForm'

export default function Home() {
  return (
    <Container>
      <Pattern src={pattern} alt="" />
      <Hero>
        <Heading size="4xl">Agendamento descomplicado</Heading>
        <Text size="lg">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
        <ClainUserNameForm />
      </Hero>
      <Preview>
        <Image src={previewImg} alt="" height={400} quality={100} priority />
      </Preview>
    </Container>
  )
}
