import { styled, Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$20',
  marginLeft: 'auto',
  maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',
  height: '100vh',
  overflow: 'hidden',
  position: 'relative',
})

export const Hero = styled('div', {
  maxWidth: '480px',
  padding: '0 $10',

  [`> ${Heading}`]: {
    '@media(max-width:600px)': {
      fontSize: '$6xl',
    },
  },
  [`> ${Text}`]: {
    marginTop: '$2',
    overflow: 'hidden',
    color: '$gray200',
  },
})

export const Preview = styled('div', {
  paddingRight: '$8',
  '@media(max-width:700px)': {
    display: 'none',
  },
})

export const Pattern = styled(Image, {
  position: 'absolute',
  zIndex: '-1',
})
