import { ADDITEM, RESETITEM } from '../types'

export const resetItems = () => dispatch => dispatch({ type: RESETITEM })
export default (key, value) => dispatch => dispatch({ type: ADDITEM, key, value })
