
import {createReducer,createAction} from "@reduxjs/toolkit"

const initialState = {
    points:15,
}

export const increment = createAction("reward/increment")
const rewardReducer = createReducer(initialState,(builder)=>{
    builder.addCase(increment,(state)=>{
        state.points++;
    })
})

export default rewardReducer;