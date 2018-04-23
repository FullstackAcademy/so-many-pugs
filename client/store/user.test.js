/* eslint-env mocha,chai */

import {expect} from 'chai'
import {me} from './user'

describe('actions', () => {
  describe('me', () => {
    it('returns an action with `api`, `types` and `method`', () => {
      const action = me()
      expect(action.types[0]).to.equal('LOADING_USER')
      expect(action.types[1]).to.equal('GET_USER')
      expect(action.types[2]).to.equal('ERROR')
      expect(action.api).to.equal('/auth')
      expect(action.method).to.equal('get')
    })
  })
})
