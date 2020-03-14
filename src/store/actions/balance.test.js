import * as actionTypes from './actionTypes'
import * as actions from './balance'

describe('Balance Actions',()=>{
    it('creates an action to set balance',()=>{
        let balance = 0;
        let expectedBalance = {type: actionTypes.SET_BALANCE, balance }
        expect(actions.setBalance(balance)).toEqual(expectedBalance)
    })
})