import {CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED

} from './constants'; 
import * as reducers from './reducers';

describe('searchrobots', () => {
    const initialStateSearch ={
        searchField: ''
    }

        it('search robots', () =>{
            expect(reducers.searchRobots(initialStateSearch, {
                type: CHANGE_SEARCH_FIELD,
                payload: 'abc'
            })).toEqual({searchField: 'abc'})
    })
    it('search robots default', () =>{
        expect(reducers.searchRobots(initialStateSearch, {
            
        })).toEqual(initialStateSearch)
})

})
describe('requestrobots', () => {
    const intialStateRobots = {
        isPending: false,
        robots: [],
        error:''
    }

    it('request robot weew ', ()=>{
        expect(reducers.requestRobots(intialStateRobots,{})).toEqual(intialStateRobots)
    })

    it('request robot Pending', ()=>{
        expect(reducers.requestRobots(intialStateRobots,{
            type:REQUEST_ROBOTS_PENDING
        })).toEqual({
            isPending: true,
            robots: [],
            error:''
        })
    })

    it('request robot success', ()=>{
        expect(reducers.requestRobots(intialStateRobots,{
            type:REQUEST_ROBOTS_SUCCESS,
            payload:[{
                id:123,
                name:'test',
                email:'test@gmail.com'
            }]
        })).toEqual({
            isPending: false,
            robots: [{
                id:123,
                name:'test',
                email:'test@gmail.com'
            }],
            error:''
        })
    })

    it('request robot error', ()=>{
        expect(reducers.requestRobots(intialStateRobots,{
            type:REQUEST_ROBOTS_FAILED,
            payload:'NOOOOOOOOO'})).toEqual({
            isPending: false,
            robots: [],
            error:'NOOOOOOOOO'
        })
    })
})