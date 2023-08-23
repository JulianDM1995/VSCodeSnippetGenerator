import {
  Divider,
  Flex,
  Grid,
  Group,
  Text,
  TextInput,
  Textarea,
  Title,
} from '@mantine/core'
import { Prism } from '@mantine/prism'
import { Code, SourceCode } from 'tabler-icons-react'
import { processCode } from '../functions'
import { useApp } from '../useApp'

export const AppContent = () => {
  const {
    name,
    prefix,
    rawCode,
    description,
    setName,
    setPrefix,
    setRawCode,
    setDescription,
    placeholders,
  } = useApp()

  return (
    <Grid gutter={'xl'} h={'100%'}>
      <Grid.Col md={6} xs={12}>
        <Group>
          <SourceCode />
          <Title order={3}>{'Desired snippet'}</Title>
        </Group>
        <Divider my={10} />
        <Flex p={'xs'} gap={'xl'} direction={'column'}>
          <TextInput
            label="Snippet name"
            value={name}
            onChange={(event) => setName(event.currentTarget.value)}
          />
          <TextInput
            label="Snippet prefix"
            value={prefix}
            onChange={(event) => setPrefix(event.currentTarget.value)}
          />
          <TextInput
            label="Snippet description"
            value={description}
            onChange={(event) => setDescription(event.currentTarget.value)}
          />

          <Textarea
            autosize
            label="Desired snippet with placeholder words"
            minRows={15}
            value={rawCode}
            onChange={(event) => setRawCode(event.currentTarget.value)}
          />
        </Flex>
      </Grid.Col>
      <Grid.Col md={6} xs={12}>
        <Group>
          <Code />
          <Title order={3}>{'Generated snippet'}</Title>
        </Group>
        <Divider my={10} />
        <Text size={'sm'} span color="dimmed">
          {'./.vscode/'}
          <Text size={'sm'} span weight={'bold'} color="dimmed">
            {'mySnippets.code-snippets'}
          </Text>
        </Text>
        <Prism withLineNumbers language="json">
          {processCode(name, prefix, description, rawCode, placeholders)}
        </Prism>
      </Grid.Col>
    </Grid>
  )
}
