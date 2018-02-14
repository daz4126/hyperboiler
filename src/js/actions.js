const actions = {
  add: () => state => ({
    input: '',
    todos: state.todos.concat({
      value: state.input,
      id: state.todos.length + 1 })
  }),
  input: ({ value }) => ({ input: value })
}

export default actions;
