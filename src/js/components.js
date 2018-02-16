import { h } from 'hyperapp'

export const ListItem = ({ value,id,completed,toggle,destroy }) => (<li class={completed && "completed"} id={id} key={id} onclick={e =>
      toggle({
        value: completed,
        id: id
      })}>{value}<button onclick={ () => destroy(id) }>x</button></li>
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

export const List = ({ items,toggle,destroy }) => (
        <ul id='list'>
          {items.map(item => (
              <ListItem
                id={item.id}
                value={item.value}
                completed={item.completed}
                toggle={toggle}
                destroy={destroy}
              />
            ))}
        </ul>
);
