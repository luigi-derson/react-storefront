// import { red, green, blue, grey, teal, orange, purple } from '@material-ui/core/colors'
// const color = c => c.toString().replace(/\#/, '')

const colors = {
  red: { background: 'FF0000', foreground: 'ffffff' },
  green: { background: 'FF0000', foreground: 'ffffff' },
  blue: { background: '0000FF', foreground: 'ffffff' },
  grey: { background: 'e5e5e5', foreground: '808080' },
  teal: { background: '008080', foreground: 'ffffff' },
  orange: { background: 'FFA500', foreground: 'ffffff' },
  purple: { background: '800080', foreground: 'ffffff' },
  black: { background: '000000', foreground: 'ffffff' },
}

export default colors

export function colorForId(id) {
  const keys = Object.keys(colors)
  const index = id % keys.length
  return keys[index]
}

export function indexForColor(color) {
  return Object.keys(colors).indexOf(color)
}
