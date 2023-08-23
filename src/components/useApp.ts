import { create } from 'zustand'
import { Placeholder } from './types'

interface AppState {
  name: string
  prefix: string
  rawCode: string
  description: string
  placeholders: Placeholder[]
  setName: (name: string) => void
  setPrefix: (prefix: string) => void
  setRawCode: (rawCode: string) => void
  setDescription: (description: string) => void
  addPlaceholder: (input: string, output: string) => void
  removePlaceholder: (index: number) => void
  updatePlaceholder: (index: number, updatedData: Partial<Placeholder>) => void
  getPlaceholder: (index: number) => Placeholder | undefined
}

export const useApp = create<AppState>((set, get) => ({
  name: 'snippet_name',
  prefix: 'prefix_to_use',
  rawCode: `export const COMPONENT_NAME = () => {
    return (
      <div>
        <div>{'React component'}</div>
      </div>
    )
  }`,
  description: 'This snippet rocks!',
  placeholders: [
    {
      input: 'COMPONENT_NAME',
      output: '1',
    },
  ],
  setName: (name) => set({ name }),
  setPrefix: (prefix) => set({ prefix }),
  setRawCode: (rawCode) => set({ rawCode }),
  setDescription: (description) => set({ description }),
  addPlaceholder: (input, output) => {
    set((state) => ({
      placeholders: [...state.placeholders, { input, output }],
    }))
  },
  removePlaceholder: (index) => {
    set((state) => ({
      placeholders: state.placeholders.filter((_, i) => i !== index),
    }))
  },
  getPlaceholder: (index) => {
    const placeholder = get().placeholders[index]
    return placeholder ? { ...placeholder } : undefined
  },

  updatePlaceholder: (index, updatedData) => {
    set((state) => {
      const updatedPlaceholders = [...state.placeholders]
      const placeholderToUpdate = updatedPlaceholders[index]

      // Actualiza las propiedades de la placeholder según los datos proporcionados
      if (updatedData.input !== undefined) {
        placeholderToUpdate.input = updatedData.input
      }

      if (updatedData.output !== undefined) {
        placeholderToUpdate.output = updatedData.output
      }

      placeholderToUpdate.defaultValue = updatedData.defaultValue

      if (updatedData.regex !== undefined) {
        placeholderToUpdate.regex = updatedData.regex
      }

      return { placeholders: updatedPlaceholders }
    })
  },
}))
