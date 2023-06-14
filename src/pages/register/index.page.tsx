import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { Container, Form, FormError, Header } from './styles'
import { ArrowRight } from 'phosphor-react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { api } from '@/lib/axios'

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário precisa ter pelo menos 3 letras' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O usuário precisa apenas letras e hifens',
    })
    .transform((username) => username.toLowerCase()),
  name: z
    .string()
    .min(3, { message: 'O usuário precisa ter pelo menos 3 letras' }),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export default function Register() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  const router = useRouter()

  useEffect(() => {
    if (router.query.username) {
      setValue('username', String(router.query.username))
    }
  }, [router.query?.username, setValue])

  async function handleRegister(data: RegisterFormData) {
    try {
      await api.post('/users', {
        name: data.name,
        username: data.username,
      })

      await router.push('register/connect-callendar')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Container>
      <svg
        fill="none"
        viewBox="0 0 960 637"
        height="100%"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_1_167)">
          <ellipse
            cx="479.5"
            cy="318.5"
            fill="#00875f"
            fillOpacity="0.5"
            rx="118.5"
            ry="118.5"
            transform="rotate(-90 479.5 318.5)"
          ></ellipse>
        </g>
        <mask
          height="573"
          id="mask0_1_167"
          maskUnits="userSpaceOnUse"
          style={{ maskType: 'alpha' }}
          width="960"
          x="0"
          y="32"
        >
          <rect
            height="573"
            width="960"
            y="32"
            fill="url(#paint0_radial_1_167)"
          ></rect>
        </mask>
        <g mask="url(#mask0_1_167)">
          <rect height="79" width="79" y="41.5" stroke="white" x="123.5"></rect>
          <rect height="79" width="79" y="41.5" stroke="white" x="202.5"></rect>
          <rect height="79" width="79" y="41.5" stroke="white" x="281.5"></rect>
          <rect height="79" width="79" y="41.5" stroke="white" x="360.5"></rect>
          <rect height="79" width="79" y="41.5" stroke="white" x="439.5"></rect>
          <rect height="79" width="79" y="41.5" stroke="white" x="518.5"></rect>
          <rect
            height="79"
            width="79"
            y="41.5"
            stroke="white"
            x="597.5"
            fill="white"
            fillOpacity="0.25"
          ></rect>
          <rect height="79" width="79" y="41.5" stroke="white" x="676.5"></rect>
          <rect height="79" width="79" y="41.5" stroke="white" x="755.5"></rect>
          <rect
            height="79"
            width="79"
            y="120.5"
            stroke="white"
            x="123.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="120.5"
            stroke="white"
            x="202.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="120.5"
            stroke="white"
            x="281.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="120.5"
            stroke="white"
            x="360.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="120.5"
            stroke="white"
            x="439.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="120.5"
            stroke="white"
            x="518.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="120.5"
            stroke="white"
            x="597.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="120.5"
            stroke="white"
            x="676.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="120.5"
            stroke="white"
            x="755.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="199.5"
            stroke="white"
            x="123.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="199.5"
            stroke="white"
            x="202.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="199.5"
            stroke="white"
            x="281.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="199.5"
            stroke="white"
            x="360.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="199.5"
            stroke="white"
            x="439.5"
            fill="white"
            fillOpacity="0.25"
          ></rect>
          <rect
            height="79"
            width="79"
            y="199.5"
            stroke="white"
            x="518.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="199.5"
            stroke="white"
            x="597.5"
            fill="white"
            fillOpacity="0.25"
          ></rect>
          <rect
            height="79"
            width="79"
            y="199.5"
            stroke="white"
            x="676.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="199.5"
            stroke="white"
            x="755.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="278.5"
            stroke="white"
            x="123.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="278.5"
            stroke="white"
            x="202.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="278.5"
            stroke="white"
            x="281.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="278.5"
            stroke="white"
            x="360.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="278.5"
            stroke="white"
            x="439.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="278.5"
            stroke="white"
            x="518.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="278.5"
            stroke="white"
            x="597.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="278.5"
            stroke="white"
            x="676.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="278.5"
            stroke="white"
            x="755.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="357.5"
            stroke="white"
            x="123.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="357.5"
            stroke="white"
            x="202.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="357.5"
            stroke="white"
            x="281.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="357.5"
            stroke="white"
            x="360.5"
            fill="white"
            fillOpacity="0.25"
          ></rect>
          <rect
            height="79"
            width="79"
            y="357.5"
            stroke="white"
            x="439.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="357.5"
            stroke="white"
            x="518.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="357.5"
            stroke="white"
            x="597.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="357.5"
            stroke="white"
            x="676.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="357.5"
            stroke="white"
            x="755.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="436.5"
            stroke="white"
            x="123.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="436.5"
            stroke="white"
            x="202.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="436.5"
            stroke="white"
            x="281.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="436.5"
            stroke="white"
            x="360.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="436.5"
            stroke="white"
            x="439.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="436.5"
            stroke="white"
            x="518.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="436.5"
            stroke="white"
            x="597.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="436.5"
            stroke="white"
            x="676.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="436.5"
            stroke="white"
            x="755.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="515.5"
            stroke="white"
            x="123.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="515.5"
            stroke="white"
            x="202.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="515.5"
            stroke="white"
            x="281.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="515.5"
            stroke="white"
            x="360.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="515.5"
            stroke="white"
            x="439.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="515.5"
            stroke="white"
            x="518.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="515.5"
            stroke="white"
            x="597.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="515.5"
            stroke="white"
            x="676.5"
          ></rect>
          <rect
            height="79"
            width="79"
            y="515.5"
            stroke="white"
            x="755.5"
          ></rect>
        </g>
        <defs>
          <filter
            color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse"
            height="637"
            id="filter0_f_1_167"
            width="637"
            x="161"
            y="1.14441e-05"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_1_167"
              stdDeviation="100"
            ></feGaussianBlur>
          </filter>
          <radialGradient
            cx="0"
            cy="0"
            gradientTransform="translate(480 318.5) rotate(90) scale(353.19 591.732)"
            gradientUnits="userSpaceOnUse"
            id="paint0_radial_1_167"
            r="1"
          >
            <stop stop-color="#D9D9D9" stop-opacity="0.2"></stop>
            <stop
              stop-color="#D9D9D9"
              stop-opacity="0"
              offset="0.802083"
            ></stop>
          </radialGradient>
        </defs>
      </svg>
      <Header>
        <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={1} />
      </Header>

      <Form as="form" onSubmit={handleSubmit(handleRegister)}>
        <label>
          <Text size="sm">Nome de usuário</Text>
          <TextInput
            prefix="ignite.com/"
            placeholder="Seu usuário"
            {...register('username')}
          />

          {errors.username && (
            <FormError size="xs">{errors.username.message}</FormError>
          )}
        </label>
        <label>
          <Text size="sm">Nome completo</Text>
          <TextInput placeholder="Seu nome" {...register('name')} />
          {errors.name && (
            <FormError size="xs">{errors.name.message}</FormError>
          )}
        </label>

        <Button type="submit" disabled={isSubmitting}>
          Próximo passo
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}
