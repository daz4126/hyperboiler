import { uuid } from './utils.js'

const actions = {
  add: () => state => ({
    input: '',
    items: state.items.concat({
      value: state.input,
      completed: false,
      id: uuid() })
  }),
  input: ({ value }) => ({ input: value }),
  toggle: ({ id, value }) => state => ({
    items: state.items.map(
      item => (id === item.id ? Object.assign({}, item, { completed: !value }) : item)
    )
  }),
  destroy: id => state => ({items: state.items.filter(
  item => item.id !== id)
}),
  clearAllCompleted: ({items}) => ({items: items.filter(
    item => !item.completed)
  })
}

export default actions;
