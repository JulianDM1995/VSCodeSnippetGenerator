import { Anchor, Footer, Text } from '@mantine/core'
import Link from 'next/link'

export const AppFooter = () => {
  return (
    <Footer height={30} px={'xl'}>
      <Text align="right" color="dimmed">
        {'Created by '}
        <Anchor
          target="_blank"
          href={process.env.NEXT_PUBLIC_JDM_URL as string}
          component={Link}
        >
          {'Julián D. Medina 🇨🇴'}
        </Anchor>
      </Text>
    </Footer>
  )
}
