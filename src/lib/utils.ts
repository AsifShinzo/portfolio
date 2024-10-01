export const getRandomJapanese = (length: number) => {
  const japaneseChars = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん'
  return Array.from({ length }, () => japaneseChars[Math.floor(Math.random() * japaneseChars.length)]).join('')
}