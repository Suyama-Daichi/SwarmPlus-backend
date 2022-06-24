/** 単語の先頭文字を大文字にする */
export const capitalize = (str: string) => {
  if (typeof str !== 'string' || !str) return str
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}
