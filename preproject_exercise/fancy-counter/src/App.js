import "bulma/css/bulma.css";
import {useReducer, useState} from "react";

function App() {

  const myReducer = (state, action) => { // returns a value which will be the new value of the state
    
    return action.value > 100? 100: action.value < 0 ? 0 : action.value; // extracts value from action
  }
  // const [counter, setCounter] = useState(0);
  const [counter, dispatch] = useReducer(myReducer, 0);
  const [inputValue, setInputValue] = useState(" ");

  const decrement = () => {
    dispatch({value: counter -1}); // takes in action in curly bracket
  }

  const handleKeyDown = (e) =>{
    if (e.key == "Enter"){
      dispatch({value :parseInt(inputValue)});
    }
  }

  return (<div className="App">
      <div className = "container">
        <div className= "columns is-multiline">
          <div className= "column is-full">
            <div className= "notification">
              <div className= "columns">
                <div className="column is-half">
                  <div className="field has-addons">
                      <div className="control">
                        <input className="input" 
                        type="text" 
                        placeholder="Put a number"
                        value = {inputValue}
                        onChange = {(e)=> setInputValue(e.target.value)}
                        onKeyDown = {handleKeyDown}
                        />
                      </div>
                      <div className="control">
                        <a className="button is-info"
                        onClick = {() => dispatch({value: inputValue})}
                        >
                          Assign
                        </a>
                      </div>
                  </div>
                  <div class="buttons has-addons">
                        <button class="button is-primary"
                        onClick = {() => dispatch({value : counter + 1})}>Up</button>
                        <button class="button is-warning"
                        onClick = {decrement}>Down</button>
                      </div>
                </div>
                <div className="column is-half has-text-centered">
                  <h1 className = "title">{counter}</h1>
                </div>
              </div>
            </div>
        </div>
        </div>
      </div>
  </div>
);
    
}

export default App;
