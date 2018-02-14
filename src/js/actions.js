const actions = {
  add: () => state => ({
    input: '',
    items: state.items.concat({
      value: state.input,
      completed: false,
      id: state.items.length + 1 })
  }),
  input: ({ value }) => ({ input: value }),
  toggle: ({ id, value }) => state => ({
    items: state.items.map(
      i => (id === i.id ? Object.assign({}, i, { completed: !value }) : i)
    )
  })
}

export default actions;
