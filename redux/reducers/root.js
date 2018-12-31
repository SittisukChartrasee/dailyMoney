import { CHROOT, CHSCBENV } from '../types'

const init = {
  root: undefined,
  scbENV: 'PRO',
  logout: '',
  envDev: '',
}

export default (state = init, action) => {
  const buff = {}

  switch (action.type) {
    case CHROOT:
      return { ...state, root: action.value }

    case CHSCBENV:
      return { ...state, [action.key]: action.value }

    case 'WHITELIST':
      action.key.forEach((key) => {
        buff[key] = state[key]
      })
      return { ...init, ...buff }

    default:
      return state
  }
}
