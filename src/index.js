import './css/index.scss'

import { app } from 'hyperapp'

import actions from './js/actions.js'
import state from './js/state.js'
import view from './js/view.js'

const main = app(state, actions, view, document.body);
