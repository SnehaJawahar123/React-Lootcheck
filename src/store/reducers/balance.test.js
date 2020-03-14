import * as actionTypes from '../actions/actionTypes'
import balanceReducer from './balance'

describe('Balance Reducer',()=>{
    it('should set balance correctly',()=>{
        let balance =10
        expect(balanceReducer(undefined, {type: actionTypes.SET_BALANCE, balance})).toEqual(balance)
    })
})