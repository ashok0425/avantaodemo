import SplitType from 'split-type'

export const splitText = (ref) => {
  const split = SplitType.create(ref, {
    types: 'chars, lines, words',
    wordClass: 'heading-word'
  })

  return split
}
