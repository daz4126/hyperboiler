import { h } from 'hyperapp'
import { ListItem } from './components.js'
import { genId } from './utils.js'

const view = (state, actions) => (
  <div>
    <h1><strong>Hyper</strong>List</h1>
    <div class='flex'>
      <input
        type="text"
        // adds to do when enter is pressed
        onkeyup={e => (e.keyCode === 13 ? actions.add() : null)}
        // udpates what is shown in the box
        oninput={e => actions.input({ value: e.target.value })}
        value={state.input}
        placeholder={state.placeholder}
      />
      <button onclick={actions.add}>＋</button>
    </div>
      <ul>
        {state.items
          .map(i => (
            <ListItem
              id={i.id}
              value={i.value}
              completed={i.completed}
              toggle={actions.toggle}
              destroy={actions.destroy}
            />
          ))}
      </ul>
      <a href="#" onclick={() =>
                  actions.clearAllCompleted({
                    items: state.items
                  })
                }>Clear completed items</a>
  </div>
);

export default view;
