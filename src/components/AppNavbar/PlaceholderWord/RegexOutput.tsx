import { useApp } from '@/components/useApp'
import { Select } from '@mantine/core'
import { useState } from 'react'

type FieldPlaceholder = {
  value: string
  label: string
  group?: string
  description?: string
  disabled?: boolean
}

export const RegexOutput = ({ index }: { index: number }) => {
  const [fieldPlaceholders, setFieldPlaceholders] = useState<
    FieldPlaceholder[]
  >(defaultFieldPlaceholders)
  const { getPlaceholder, updatePlaceholder } = useApp()
  const placeholder = getPlaceholder(index)

  if (!placeholder) return null

  const { regex } = placeholder

  const handleOutputChange = (value: string) => {
    updatePlaceholder(index, { regex: value })
  }

  const handleCreate = (query: string) => {
    const item = { value: query, label: query, group: '', description: '' }
    setFieldPlaceholders((current) => [...current, item])
    return item
  }

  return (
    <Select
      allowDeselect
      value={regex}
      onChange={handleOutputChange}
      size="xs"
      label="Regex"
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
    label: 'You can type your own regex as well',
    disabled: true,
  },
  {
    value: '/(.*)/${1:/upcase}/',
    label: 'Change to all uppercase',
  },
  {
    value: '/(.*)/${1:/downcase}/',
    label: 'Change to all lowercase',
  },
  {
    value: '/[^0-9^a-z]//gi',
    label: 'Remove non-alphanumeric characters',
  },
  {
    value: '/[.]/_/',
    label: 'Replace the first . with _',
  },
  {
    value: '/[.-]/_/g',
    label: 'Replace each . or - with _',
  },
  {
    value: "/[' ']/_/gi",
    label: 'Replace each space with _',
  },
  {
    value: '/(XXX)/YYY/gi',
    label: 'Replace each XXX with YYY',
  },
]
