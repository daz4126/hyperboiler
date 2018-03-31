import { h } from 'hyperapp'
import { AddItem } from './components.js'

const view = (state, actions) => (
  <div>
    <h1><strong>Hyper</strong>List</h1>
      <AddItem add={actions.add} input={actions.input}
        value={state.input} />
      <ul id='list'>
          {state.items.map(item => (
              <ListItem
                id={item.id}
                value={item.value}
                completed={item.completed}
                toggle={actions.toggle}
                destroy={actions.destroy}
              />
            ))}
        </ul>
      <button onclick={() =>
                  actions.clearAllCompleted({
                    items: state.items
                  })
                }>Clear completed items</button>
  </div>
);

export default view;
