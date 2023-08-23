import { useApp } from '@/components/useApp'
import { Group, Select, Text } from '@mantine/core'
import { forwardRef, useState } from 'react'

type FieldPlaceholder = {
  value: string
  label: string
  group?: string
  description?: string
  disabled?: boolean
}

const SelectItem = forwardRef<HTMLDivElement, FieldPlaceholder>(
  function SelectItem(
    { label, description, ...others }: FieldPlaceholder,
    ref
  ) {
    return (
      <div ref={ref} {...others}>
        <Group noWrap>
          <div>
            <Text size="sm">{label}</Text>
            <Text size="xs" opacity={0.65}>
              {description}
            </Text>
          </div>
        </Group>
      </div>
    )
  }
)

export const DefaultValue = ({ index }: { index: number }) => {
  const [fieldPlaceholders, setFieldPlaceholders] = useState<
    FieldPlaceholder[]
  >(defaultFieldPlaceholders)
  const { getPlaceholder, updatePlaceholder } = useApp()
  const placeholder = getPlaceholder(index)

  if (!placeholder) return null

  const { defaultValue } = placeholder

  const handleOutputChange = (value: string) => {
    updatePlaceholder(index, { defaultValue: value })
  }

  const handleCreate = (query: string) => {
    const item = { value: query, label: query, group: '', description: '' }
    setFieldPlaceholders((current) => [...current, item])
    return item
  }

  return (
    <Select
      itemComponent={SelectItem}
      allowDeselect
      value={defaultValue}
      onChange={handleOutputChange}
      size="xs"
      label="Default value"
      data={fieldPlaceholders}
      placeholder="Default value"
      clearable
      searchable
      creatable
      getCreateLabel={(query) => `Custom: ${query}`}
      onCreate={handleCreate}
    />
  )
}

const defaultFieldPlaceholders = [
  {
    value: 'LABEL',
    label: 'You can type any value as well',
    disabled: true,
  },
  {
    value: ':${TM_SELECTED_TEXT}',
    label: 'TM_SELECTED_TEXT',
    group: 'Placeholders',
    description: 'The currently selected text or the empty string',
  },
  {
    value: ':${TM_CURRENT_LINE}',
    label: 'TM_CURRENT_LINE',
    group: 'Placeholders',
    description: 'The contents of the current line',
  },
  {
    value: ':${TM_CURRENT_WORD}',
    label: 'TM_CURRENT_WORD',
    group: 'Placeholders',
    description: 'The contents of the word under cursor or the empty string',
  },
  {
    value: ':${TM_LINE_INDEX}',
    label: 'TM_LINE_INDEX',
    group: 'Placeholders',
    description: 'The zero-index based line number',
  },
  {
    value: ':${TM_LINE_NUMBER}',
    label: 'TM_LINE_NUMBER',
    group: 'Placeholders',
    description: 'The one-index based line number',
  },
  {
    value: ':${TM_FILENAME}',
    label: 'TM_FILENAME',
    group: 'Placeholders',
    description: 'The filename of the current document',
  },
  {
    value: ':${TM_FILENAME_BASE}',
    label: 'TM_FILENAME_BASE',
    group: 'Placeholders',
    description: 'The filename of the current document without its extensions',
  },
  {
    value: ':${TM_DIRECTORY}',
    label: 'TM_DIRECTORY',
    group: 'Placeholders',
    description: 'The directory of the current document',
  },
  {
    value: ':${TM_FILEPATH}',
    label: 'TM_FILEPATH',
    group: 'Placeholders',
    description: 'The full file path of the current document',
  },
  {
    value: ':${RELATIVE_FILEPATH}',
    label: 'RELATIVE_FILEPATH',
    group: 'Placeholders',
    description:
      'The relative (to the opened workspace or folder) file path of the current document',
  },
  {
    value: ':${CLIPBOARD}',
    label: 'CLIPBOARD',
    group: 'Placeholders',
    description: 'The contents of your clipboard',
  },
  {
    value: ':${WORKSPACE_NAME}',
    label: 'WORKSPACE_NAME',
    group: 'Placeholders',
    description: 'The name of the opened workspace or folder',
  },
  {
    value: ':${WORKSPACE_FOLDER}',
    label: 'WORKSPACE_FOLDER',
    group: 'Placeholders',
    description: 'The path of the opened workspace or folder',
  },
  {
    value: ':${CURSOR_INDEX}',
    label: 'CURSOR_INDEX',
    group: 'Placeholders',
    description: 'The zero-index based cursor number',
  },
  {
    value: ':${CURSOR_NUMBER}',
    label: 'CURSOR_NUMBER',
    group: 'Placeholders',
    description: 'The one-index based cursor number',
  },
  {
    value: ':${CURRENT_YEAR}',
    label: 'CURRENT_YEAR',
    group: 'Dates',
    description: 'The current year',
  },
  {
    value: ':${CURRENT_YEAR_SHORT}',
    label: 'CURRENT_YEAR_SHORT',
    group: 'Dates',
    description: "The current year's last two digits",
  },
  {
    value: ':${CURRENT_MONTH}',
    label: 'CURRENT_MONTH',
    group: 'Dates',
    description: "The month as two digits (example '02')",
  },
  {
    value: ':${CURRENT_MONTH_NAME}',
    label: 'CURRENT_MONTH_NAME',
    group: 'Dates',
    description: "The full name of the month (example 'July')",
  },
  {
    value: ':${CURRENT_MONTH_NAME_SHORT}',
    label: 'CURRENT_MONTH_NAME_SHORT',
    group: 'Dates',
    description: "The short name of the month (example 'Jul')",
  },
  {
    value: ':${CURRENT_DATE}',
    label: 'CURRENT_DATE',
    group: 'Dates',
    description: "The day of the month as two digits (example '08')",
  },
  {
    value: ':${CURRENT_DAY_NAME}',
    label: 'CURRENT_DAY_NAME',
    group: 'Dates',
    description: "The name of day (example 'Monday')",
  },
  {
    value: ':${CURRENT_DAY_NAME_SHORT}',
    label: 'CURRENT_DAY_NAME_SHORT',
    group: 'Dates',
    description: "The short name of the day (example 'Mon')",
  },
  {
    value: ':${CURRENT_HOUR}',
    label: 'CURRENT_HOUR',
    group: 'Dates',
    description: 'The current hour in 24-hour clock format',
  },
  {
    value: ':${CURRENT_MINUTE}',
    label: 'CURRENT_MINUTE',
    group: 'Dates',
    description: 'The current minute as two digits',
  },
  {
    value: ':${CURRENT_SECOND}',
    label: 'CURRENT_SECOND',
    group: 'Dates',
    description: 'The current second as two digits',
  },
  {
    value: ':${CURRENT_SECONDS_UNIX}',
    label: 'CURRENT_SECONDS_UNIX',
    group: 'Dates',
    description: 'The number of seconds since the Unix epoch',
  },
  {
    value: ':${CURRENT_TIMEZONE_OFFSET}',
    label: 'CURRENT_TIMEZONE_OFFSET',
    group: 'Dates',
    description:
      'The current UTC time zone offset as +HH:MM or -HH:MM (example -07:00).',
  },
  {
    value: ':${RANDOM}',
    label: 'RANDOM',
    group: 'random',
    description: '6 random Base-10 digits',
  },
  {
    value: ':${RANDOM_HEX}',
    label: 'RANDOM_HEX',
    group: 'random',
    description: '6 random Base-16 digits',
  },
  {
    value: ':${UUID}',
    label: 'UUID',
    group: 'random',
    description: 'A Version 4 UUID',
  },
  {
    value: ':${BLOCK_COMMENT_START}',
    label: 'BLOCK_COMMENT_START',
    group: 'Comments',
    description: 'Example output: in PHP /* or in HTML <!--',
  },
  {
    value: ':${BLOCK_COMMENT_END}',
    label: 'BLOCK_COMMENT_END',
    group: 'Comments',
    description: 'Example output: in PHP */ or in HTML -->',
  },
  {
    value: ':${LINE_COMMENT}',
    label: 'LINE_COMMENT',
    group: 'Comments',
    description: 'Example output: in PHP //',
  },
]
