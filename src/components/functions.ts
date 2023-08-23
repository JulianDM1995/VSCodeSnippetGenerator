import { Placeholder } from './types'

export const processCode = (
  name: string,
  prefix: string,
  description: string,
  rawCode: string,
  placeholders: Placeholder[]
) => {
  const processedCode = processPlaceholders(rawCode, placeholders)

  return `
// Snippet for ${name}   
"${name}": {
  "prefix": "${prefix}",
  "body": [
${processBody(processedCode)}
  ],
  "description": "${description}"
}`
}

const processPlaceholders = (rawCode: string, placeholders: Placeholder[]) => {
  return placeholders.reduce((processedCode, placeholder) => {
    if (placeholder.input === '') {
      // Si input es una cadena vacía, evitamos reemplazar en el código
      return processedCode
    }

    const regex = new RegExp(placeholder.input, 'g')

    let value = placeholder.output

    value =
      placeholder.defaultValue && placeholder.defaultValue !== ''
        ? `${value}${placeholder.defaultValue}`
        : value

    value =
      placeholder.regex && placeholder.regex !== ''
        ? `${value}${placeholder.regex}`
        : value

    value = `\${${value}}`

    return processedCode.replace(regex, value)
  }, rawCode)
}

const processBody = (rawCode: string) => {
  return `${rawCode
    .replace(/"/g, "'")
    .split('\n')
    .map((line) => `${'     '}"${line}",`) // Agrega dos espacios (indentación) adicionales al comienzo de cada línea
    .join('\n')}`
}
