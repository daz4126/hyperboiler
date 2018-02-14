export const genId = (_ => {
  let n = 0
  return _ => 'key-' + (++n)
})()
