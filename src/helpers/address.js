export function shortenString(str) {
  return str.endsWith('.eth') ? str : str.substring(0, 6) + '...' + str.substring(str.length - 4)
}
