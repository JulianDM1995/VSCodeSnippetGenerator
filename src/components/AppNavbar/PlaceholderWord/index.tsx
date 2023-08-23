import {
  Accordion,
  ActionIcon,
  Box,
  Card,
  Flex,
  Text,
  TextInput,
} from '@mantine/core'
import { modals } from '@mantine/modals'
import { X } from 'tabler-icons-react'
import { useApp } from '../../useApp'
import { DefaultValue } from './DefaultValue'
import { Output } from './Output'
import { RegexOutput } from './RegexOutput'

type PlaceholderProps = {
  index: number
}

export const PlaceholderWord = ({ index }: PlaceholderProps) => {
  const { getPlaceholder, updatePlaceholder, removePlaceholder } = useApp()
  const placeholder = getPlaceholder(index)

  const openRemoveConfirmModal = (index: number) =>
    modals.openConfirmModal({
      title: 'Please confirm remove',
      color: 'red',
      children: <Text size="sm">Remove placeholder?</Text>,
      labels: { confirm: 'Yes', cancel: 'No' },
      onConfirm: () => removePlaceholder(index),
    })

  if (!placeholder) return null
  const { input, output, defaultValue, regex } = placeholder

  return (
    <Accordion.Item value={`placeholder-${index}`}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Accordion.Control>
          <Flex align={'center'} gap={'xs'}>
            {input ? (
              <Text w={'100%'}>{input}</Text>
            ) : (
              <Text w={'100%'} color="red">
                {'MISSING FIELDS'}
              </Text>
            )}
          </Flex>
        </Accordion.Control>
        <ActionIcon color="red" size="lg">
          <X onClick={() => openRemoveConfirmModal(index)} size={18} />
        </ActionIcon>
      </Box>

      <Accordion.Panel>
        <Card sx={{ overflow: 'visible' }} radius={'md'} mb={'xs'} py={'xs'}>
          <Flex direction={'column'} gap={'xs'}>
            <TextInput
              withAsterisk
              error={input == ''}
              value={input}
              onChange={(event) =>
                updatePlaceholder(index, { input: event.currentTarget.value })
              }
              size="xs"
              label="Placeholder word"
              w={'100%'}
            />

            <Output index={index} />
            <RegexOutput index={index} />
            <DefaultValue index={index} />
          </Flex>
        </Card>
      </Accordion.Panel>
    </Accordion.Item>
  )
}
