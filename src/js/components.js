import { h } from 'hyperapp'

export const ListItem = ({ value,id,completed,toggle,destroy }) => (<li class={completed && "completed"} id={id} key={id} onclick={e =>
      toggle({
        value: completed,
        id: id
      })}>{value}<button onclick={ () => destroy(id) }>x</button></li>
    )
