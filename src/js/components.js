import { h } from 'hyperapp'

export const ListItem = ({ value,id,completed,toggle,destroy }) => (<li class={completed && "completed"} id={id} key={id} onclick={e =>
      toggle(id)}>{value}<button onclick={ () => destroy(id) }>x</button></li>
    );

export const AddItem = ({ add, input, value, placeholder }) => (    <div class='flex'>
      <input
        type="text"
        // adds to do when enter is pressed
        onkeyup={e => (e.keyCode === 13 ? add() : null)}
        // udpates what is shown in the box
        oninput={e => input({ value: e.target.value })}
        value={value}
        placeholder={placeholder}
      />
      <button onclick={add}>＋</button>
    </div>
  );
