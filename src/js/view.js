import { h } from 'hyperapp'
import { AddItem, List } from './components.js'

const view = (state, actions) => (
  <div>
    <h1><strong>Hyper</strong>List</h1>
      <AddItem add={actions.add} input={actions.input}
        value={state.input} placeholder={state.placeholder} />
      <List items={state.items} toggle={actions.toggle} destroy={actions.destroy} />
      <a href="#" onclick={() =>
                  actions.clearAllCompleted({
                    items: state.items
                  })
                }>Clear completed items</a>
  </div>
);

export default view;
