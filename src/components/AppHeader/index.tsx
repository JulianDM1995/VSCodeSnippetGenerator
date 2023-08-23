import { Anchor, Button, Flex, Group, Header, Text } from '@mantine/core'
import { modals } from '@mantine/modals'
import Link from 'next/link'
import { Video } from 'tabler-icons-react'
import { AppIcon } from './AppIcon'

export const AppHeader = () => (
  <Header height={60}>
    <Flex px={'20px'} h={'100%'} justify={'space-between'} align={'center'}>
      <Flex gap={10}>
        <AppIcon height={35} />
        <Text size={'1.5rem'}>VSCode Snippet Generator</Text>
      </Flex>
      <Flex gap={30} align={'center'}>
        <Anchor
          target="_blank"
          size={'sm'}
          align="center"
          href={'https://code.visualstudio.com/docs/editor/userdefinedsnippets'}
          component={Link}
        >
          VSCode snippets documentation
        </Anchor>
        <Button
          leftIcon={<Video />}
          variant="outline"
          size={'sm'}
          onClick={() => {
            modals.open({
              centered: true,
              title: (
                <Group>
                  <Video />
                  <Text>{'How to use this tool | video tutorials'}</Text>,
                </Group>
              ),

              children: (
                <Flex m={'xl'} gap={'xl'} align="center" justify={'center'}>
                  <Button
                    size="lg"
                    variant="light"
                    leftIcon={<Text size={'xl'}>🇪🇸</Text>}
                    target="_blank"
                    href={process.env.NEXT_PUBLIC_ESP_TUTORIAL_URL as string}
                    component={Link}
                  >
                    Español
                  </Button>
                  <Button
                    size="lg"
                    variant="light"
                    leftIcon={<Text size={'xl'}>🇺🇸</Text>}
                    target="_blank"
                    href={process.env.NEXT_PUBLIC_ENG_TUTORIAL_URL as string}
                    component={Link}
                  >
                    English
                  </Button>
                </Flex>
              ),
            })
          }}
        >
          How to use this tool
        </Button>
      </Flex>
    </Flex>
  </Header>
)
