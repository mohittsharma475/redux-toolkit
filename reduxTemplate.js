import axios from "axios";
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

const actionName = {
  increment: "account/increment",
  decrement: "account/decrement",
  incrementByAmount: "account/incrementbyamount",
  init:"amount/init",
  getUser: "acccount/getUser",
  getUserAccountPending: "acccount/getUser/pending",
  getUserAccountRejected: "acccount/getUser/rejected",
  getUserAccountFulfilled: "acccount/getUser/fulfilled",
  incrementBonus: "bonus/increment"
};

//store

const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer,
  }),
  applyMiddleware(logger.default, thunk)
);

// const state= {amount:vale}

// return state.amount = state.amount+1;  mutable
// return {amount : state.amount+1} immutable

function accountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case actionName.increment:
      return { amount: state.amount + 1 };
    case actionName.decrement:
      return { amount: state.amount - 1 };
    case actionName.incrementByAmount:
      return { amount: state.amount + action.payload };
    case actionName.init:
      return { amount: action.payload };
    case actionName.getUserAccountFulfilled:
      return {amount:action.payload,pending:false}

    case actionName.getUserAccountPending:
      return {...state,pending:true}

    case actionName.getUserAccountRejected:
      return {...state,error:action.error,pending:false}

    default:
      return state;
  }
}

function bonusReducer(state = { points: 0 }, action) {
  switch(action.type){
    case actionName.incrementByAmount:
      if(action.payload >=100){
        return {points:state.points+1};
      }
      return state
    case actionName.incrementBonus:
      return {points:state.points+1}
    default :
      return state;
  }

}

//global state

store.subscribe(() => {
  console.log(store.getState());
  // run whenever state changed by reducer
});

// Action creator

async function getUser(dispatch, getState) {
  // error

  try{
    dispatch(getUserAccountPending());
    const { data } = await axios.get("http://localhost:3000/accounts/1");
    dispatch(getUserAccountFulfilled(data.amount));
  }catch(error){
    dispatch(getUserAccountRejected(error.message))
  }
 
  // dispatch({ type: actionName.getUser, payload: data.amount });
  
}


function getUserAccountFulfilled(data){
  return {type:actionName.getUserAccountFulfilled,payload:data}
}
function getUserAccountPending(){
  return {type:actionName.getUserAccountPending}
}
function getUserAccountRejected(error){
  return {type:actionName.getUserAccountRejected,payload:error}
}

function init(value){
  return {type:actionName.init,payload:value};
}

function increment() {
  return { type: actionName.increment };
}

function decrement() {
  return { type: actionName.decrement};
}

function incrementByAmount(value) {
  return { type: actionName.incrementByAmount, payload: value };
}

function incrementBonus() {
  return {type:actionName.incrementBonus}
}

// console.log(store.getState());
// store.dispatch({type:"increment"});

setTimeout(() => {
  store.dispatch(getUser);
}, 2000);
