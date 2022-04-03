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
      const inputId={id:new Date().getTime().toString(),name:inputlist}
      setlistitems([...listitems,inputId]);
      setinputlist('');
    }
   
  }
  const clearData=()=>{
  setlistitems([]);
}
const Delete=(id)=>{
  console.log(id);
  const del=listitems.filter((currentElm)=>{

    return id!==currentElm.id
  });

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
          listitems.map((dataElm) => {
            return <div className='second-con'>
               <h1 className='dataStyle' key={dataElm.id}>Product:{dataElm.name} 
               <button onClick={()=>Delete(dataElm.id)} title='delete item' className='delBtn'>Delete</button></h1>
            </div>
          
          })
        }
        <button className="btn" onClick={clearData} data-sm-link-text="Remove All">Clear All</button>
      </div>

    </>
  )
}
reactDOM.render(<Arrays />, document.getElementById('root'))