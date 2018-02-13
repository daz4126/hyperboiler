import { h } from 'hyperapp'

const view = (state, actions) => (
  <main>
    <h1>{state.count}</h1>
    <button onclick={() => actions.down(1)} disabled={state.count <= 0}>ー</button>
    <button onclick={() => actions.up(1)}>＋</button>
  </main>
);

export default view;
