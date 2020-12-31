import logo from './logo.svg';
// import schulich from '/schulich.png';
import './App.css';
import "bulma/css/bulma.css";
import {useReducer,useState} from "react";

function OutcomeList(props){
    
  const outcomeList = props.list;
  const deleteListItem = props.handleClickDelete;
  const listItems = outcomeList.map((item, index) =>
    <li key = {index} className = "is-medium">
        <div className="columns is-multiline">
            <div className="column is-8">
              <input className="input is-primary is-half" type="text" placeholder="learning outcome"/>
            </div>
            <div className = "column is-2">
            <button className="button" id= {index} onClick = {deleteListItem}>
              <span className="icon">
                <i className="fas fa-home"></i>
              </span>
              <span>delete</span>
            </button>

            </div>
        </div>
        
         
    </li>)
      
  return (
    <div className="content">
    <ol type="1">
    {listItems}  
    </ol>
    </div>
  );
}

function LearningOutcomes(props){

  const blankOutcome = "";
  
  const [outcomes, setOutcomes] = useState([""]);
  

  const addOutcome = () =>{
    setOutcomes([...outcomes,blankOutcome])
  }

  const deleteOutcome = () =>{
    outcomes.pop();
    setOutcomes([...outcomes]);
  }

  const deleteItem = (e) =>{
    const index = e.target.id;
    outcomes.splice(index, 1);
    // outcomes.pop();
    setOutcomes([...outcomes]);
  }

  
  return (
    <div className = "container mt-6">
        <h1 className = "title is-4">2. Learning Outcomes</h1>
        <p>At the end of this course you should be able to:</p>
        <OutcomeList list = {outcomes} handleClickDelete = {deleteItem}/>
        <div className="buttons">
          <button className="button is-success" onClick = {addOutcome} >Add learning outcome</button>
          <button className="button is-danger" onClick = {deleteOutcome}>Delete learning outcome</button>
        </div>
      </div>
  )
}





function GradeTable(){
  const blankComp = {component: ' ', learn_out: ' ', weight: 0};
  const [gradeComps, setGradeComps] = useState([{...blankComp}]);

  // const [total, setTotal] = useState(0);
  const calcTotal = arr => arr.reduce((a,b) => a+parseInt(b.weight),0);
  
  const myReducer = (state, action)=>{
    const weights = action.value;
    return calcTotal([...weights]);
  }

  const [total, dispatch] = useReducer(myReducer, 0);

  





// const addToWeight = (e)=>{
//   const newWeight = e.target.value;
//   weights.push(newWeight);
//   // setWeights([...weights, newWeight]);
//   setWeights(weights);
//   setTotal(calcTotal([...weights]));
//   console.log(weights);
// }

  const addRow= () =>{
    setGradeComps([...gradeComps,{...blankComp}])
  }

  const deleteRow = () =>{
    gradeComps.pop();
    setGradeComps([...gradeComps]);
  }

  const deleteRowItem = (e) =>{
    const index = e.currentTarget.dataset.idx;
    console.log("deleted index is " + index);
    gradeComps.splice(index,1);
    setGradeComps([...gradeComps]);
    dispatch({value: gradeComps});
    console.log(gradeComps);
  }

  const handleCompChange = (e) =>{
    // let name = e.target.name;
    // let value = e.target.value;
    // const updatedComps = {...gradeComps, [name]:[value]};
    const updatedComps = [...gradeComps];
    console.log(updatedComps);
    console.log("changed index is " + e.target.dataset.idx);
    updatedComps[e.target.dataset.idx][e.target.name] = e.target.value;
    dispatch({value: updatedComps});
    // setTotal(calcTotal([...gradeComps]));
    setGradeComps([...updatedComps]);
  }

  function GradeTableBody(props){
    const compList = props.list;
    const delRow = props.handleDelete;
    
    const rows = compList.map((item, idx) =>
      <tr key = {`row_${idx}`}>
      <td>
        <form>
          <input type = "text" data-idx = {idx} id = {`component_${idx}`} name="component" className ="input is-small" value = {gradeComps[idx].component} onChange={handleCompChange} ></input>
        </form>
      </td>
      <td>
        <form>
        <input type = "text" data-idx = {idx} id = {`learn_out_${idx}`} name ="learn_out" className ="input is-small" value = {gradeComps[idx].learn_out} onChange={handleCompChange}></input>
        </form>
      </td>
      <td>
        <form>
        <input type = "number" data-idx = {idx} id = {`weight_${idx}`} name = "weight" className ="input is-small" value = {gradeComps[idx].weight} onChange={handleCompChange} ></input>
        </form>
      </td>
      <button className="button" data-idx= {idx} onClick = {delRow}>
              <span className="icon">
                <i className="fas fa-home"></i>
              </span>
              <span>delete</span>
            </button>
    </tr>)
        
    return (
      <tbody>
          {rows}
        </tbody>
    );
  }
  return (
    <div classname="mt-6">
    <table class="table is-narrow is-fullwidth">
        <thead>
          <tr>
            <th><abbr title="Position">Component</abbr></th>
            <th>Learning Outcome(s) Evaluated</th>
            <th><abbr title="Played">Weight</abbr></th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th></th>
            <th>Total:</th>
            <th><p>{total}</p></th>
          </tr>
          </tfoot>
        <GradeTableBody list = {gradeComps} handleDelete = {deleteRowItem}/>
      </table>
      <div className="buttons">
      <button className="button is-success" onClick = {addRow} >Add Grade Component</button>
      <button className="button is-danger" onClick = {deleteRow}>Delete Grade Component</button>
    </div>
    </div>
  );
}

function App() {
  

  

  return (

    <div className = "container">

      <div className= "columns is-multiline">
      <div class="column is-one-quarter">
        <img src ={"/schulich.png"} alt = "logo"></img>
      </div>

      <div class="column ">
        <h1 className="title is-4">COURSE OUTLINE</h1>
        <input className="input is-primary " type="text" placeholder= "Course section"/>

        <table class="table is-narrow is-fullwidth">
          <thead>
            <tr>
              <th></th>
              <th>Date</th>
              <th>initials</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Prepared by Instructor</th>
              <td>
                <form>
                <input className ="input is-small" type ="date"></input>
                </form>
              </td>
              <td>
              <form>
                <input className ="input is-small"></input>
                </form>
              </td>
            </tr>
            <tr>
              <th>Approved by head</th>
              <td>
              <form>
                <input className ="input is-small" type ="date"></input>
                </form>
              </td>
              <td>
              <form>
                <input className ="input is-small"></input>
                </form>
              </td>
            </tr>
            </tbody>
          </table>

          </div>

      </div>


      <div className="container my-3">
      <h1 className = "title is-4">1. Calendar Information</h1>
      </div>
      

      <div classname = "container">
        <div className="columns is-multiline">
        <div className="column is-2 "><label >Course code:</label></div>
        <div className="column is-8">
          <input className="input" type="text" placeholder="Course code "/>
        </div>
      </div>

        <div className="columns is-multiline">
        <div className="column is-2 "><label >Course title:</label></div>
        <div className="column is-8">
          <input className="input" type="text" placeholder="Course title "/>
        </div>
      </div>

        <div className="columns is-multiline">
        <div className="column is-2 "><label >Course Description:</label></div>
        <div className="column is-8">
        <textarea className="textarea " placeholder="Course description"></textarea>
        </div>
      </div>

    
      <div className="columns is-multiline">
        <div className="column is-2 "><label >Course Hours:</label></div>
        <div className="column is-8">
          <input className="input" type="text" placeholder="Course hours "/>
        </div>
      </div>
      
      <div className="columns is-multiline">
        <div className="column is-2 "><label >Academic Credit:</label></div>
        <div className="column is-8">
          <input className="input" type="text" placeholder="Academic Credit"/>
        </div>        
      </div>

      <div className="columns is-multiline">
        <div className="column is-2 "><label >Calendar Reference:</label></div>
        <div className="column is-8">
          <input className="input" type="text" placeholder="Calendar reference"/>
        </div>        
      </div>



      </div>


      <LearningOutcomes></LearningOutcomes>

      <div className = "container mt-6">
      <h1 className = "title is-4">7. Final Grade Determination</h1>
      <p>The final grade in this course will be based on the following components:</p>
      {/* table */}
      <GradeTable></GradeTable>
      
      <div className = "container mt-6">
        <p>Notes:</p>
        <div class="content">
            <ol class="is-lower-alpha">
                <li>You must either achieve at least 50% on the final exam or achieve at least 50% on the weighted average of the midterm and final exam. 
                  You must also achieve an average of at least 50% on the lab section of the course. If you do not satisfy these caveats, 
                  you will not receive a passing grade.</li>
                <li>Circumstances beyond one’s control (e.g. sickness, etc.), leading to missing lab session and/or delays in assignment submissions should be discussed
                  with the course instructor as soon as possible. 
                  Proper documentation must be provided. </li>
                <li>Conversion from a score out of 100 to a letter grade will be done using the conversion chart shown below. 
                  This grading scale can only be changed during the term if the grades will not be lowered.</li>
            </ol>
          </div>
        </div>
        <button className="button is-success mt-6">Save</button>
      </div>

    </div>
  );
}

export default App;
