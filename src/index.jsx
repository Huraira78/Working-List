import React,{useState} from 'react'
import reactDOM from 'react-dom'
import './arrays.css'
function Arrays() {
  const [inputlist, setinputlist] = useState('')
  const [listitems, setlistitems] = useState([])
  const additems=()=>{
    if(!inputlist)
    {

    }
    else
    {
      setlistitems([...listitems,inputlist]);
      setinputlist('');
    }
   
  }
  const clearData=()=>{
  setlistitems([]);
}
const Delete=(id)=>{
  console.log(id);
  const del=listitems.filter((currentElm,index)=>index!==id)
  setlistitems(del);
}
  return (
    <>
      <div className="main-con">
        <h1 className='caption'>Todo List.</h1>
        <input type="text" placeholder='Add Items' className='inputblock' 
           value={inputlist}
           onChange={(e)=>setinputlist(e.target.value)}
        /> 
        <button className='addbtn' onClick={additems} title='Add Item'>Add</button>
   
        {
          listitems.map((dataElm,index) => {
            return <div className='second-con'>
               <h1 className='dataStyle' key={index}>Product No{index+1}:{dataElm} 
               <button onClick={()=>Delete(index)} title='delete item' className='delBtn'>Delete</button></h1>
            </div>
          
          })
        }
        <button className="btn" onClick={clearData} data-sm-link-text="Remove All">Clear All</button>
      </div>

    </>
  )
}
reactDOM.render(<Arrays />, document.getElementById('root'))