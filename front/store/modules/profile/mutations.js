import * as mutationTypes from './mutation-type'

const mutations = {
  [mutationTypes.SAVE_PROFILE] (state, data) {
    state.username = data.username
    state.phone = data.phone
  }
}

export default mutations