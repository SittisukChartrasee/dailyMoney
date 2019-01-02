import { ADDITEM, RESETITEM } from '../types'

const init = {
  data: [],
}

export default (state = init, action) => {
  switch (action.type) {
    case ADDITEM:
      return { ...state, [action.key]: action.value }

    case RESETITEM:
      return { ...state, data: [] }

    default:
      return state
  }
}
