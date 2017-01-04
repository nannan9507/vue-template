import * as mutationTypes from './mutation-type'

export const saveProfile = ({ commit }, data) => {
  commit(mutationTypes.SAVE_PROFILE, data)
}