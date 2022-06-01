import { createStore } from "redux";


const store = createStore(function (state, action) {
  if (action.type === "editName") {
    return {
      ...state,
      currentUser: {
        name: action.payload.name
      }
    };
  }else if(action.type === "editAge"){
      return{
        ...state,
        currentUserAge: {
          age: action.payload.age
        }
      }
  }
  return state;
}, {
  currentUser: {
    name: "James1"
  },
  currentUserAge:{
    age:"21"
  }
});


export default store;