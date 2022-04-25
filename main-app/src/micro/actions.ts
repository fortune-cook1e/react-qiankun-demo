import { initGlobalState, MicroAppStateActions } from 'qiankun'
import shared from './shared'

const actions: MicroAppStateActions = initGlobalState(shared)

export default actions
