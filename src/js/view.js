import { h } from 'hyperapp'
import { ListItem } from './components.js'

const view = (state, actions) => (
  <div>
    <h1>HyperList</h1>
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
        {state.todos
          .map(t => (
            <ListItem
              id={t.id}
              value={t.value}
            />
          ))}
      </ul>
  </div>
);

export default view;
