import {
  Accordion,
  Button,
  Group,
  Navbar,
  ScrollArea,
  Title,
} from '@mantine/core'
import { CursorText, TextPlus } from 'tabler-icons-react'
import { useApp } from '../useApp'
import { PlaceholderWord } from './PlaceholderWord'

export const AppNavbar = () => {
  const { addPlaceholder, placeholders } = useApp()

  return (
    <Navbar width={{ base: 350 }} p="md">
      <Navbar.Section>
        <Group>
          <CursorText />
          <Title order={3}>{'Placeholder words'}</Title>
        </Group>
      </Navbar.Section>

      <Navbar.Section my={'lg'} grow component={ScrollArea}>
        <Accordion styles={{ content: { padding: 0 } }}>
          {placeholders.map((_, index) => (
            <PlaceholderWord key={`placeholder-${index}`} index={index} />
          ))}
        </Accordion>
      </Navbar.Section>
      <Navbar.Section mt="xs">
        <Button
          leftIcon={<TextPlus />}
          fullWidth
          onClick={() =>
            addPlaceholder(
              `INPUT_TEXT_${placeholders.length + 1}`,
              `${placeholders.length + 1}`
            )
          }
        >
          Add placeholder word
        </Button>
      </Navbar.Section>
    </Navbar>
  )
}
