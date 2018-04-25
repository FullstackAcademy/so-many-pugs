export const keyBy = array => array.reduce((col, next) => {
  col[next.id] = next
  return col
}, {})
