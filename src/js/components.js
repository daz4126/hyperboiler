import { h } from 'hyperapp'

export const ListItem = ({ value,id,completed,toggle }) => (<li class={completed && "completed"} key={id} onclick={e =>
      toggle({
        value: completed,
        id: id
      })}>{value}</li>
    )
