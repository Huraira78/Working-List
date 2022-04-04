import React,{useState} from 'react'
import reactDOM from 'react-dom'
import './arrays.css'
function Arrays() {
  const [inputlist, setinputlist] = useState('')
  const [listitems, setlistitems] = useState([])
  const [toggle,settoggle]=useState(true)
  const [editPro,seteditPro]=useState(null)
  // const [clear,setclear]=useState('')
  const additems=()=>{
    if(!inputlist)
    {
      alert("Please add item first!")
    }
    else if(inputlist&&!toggle)
    {
          setlistitems
          (
            listitems.map((elem)=>{
              if(elem.id===editPro)
                return{...elem,name:inputlist}
              return elem;
            })
          )
            settoggle(true)
            setinputlist("");
            seteditPro();
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
const editItem=(id)=>{
  let itemId=listitems.find((elem)=>{
    return elem.id===id;
  });
  console.log(itemId);
  settoggle(false)
  setinputlist(itemId.name);
  seteditPro(id);
}
// const done=()=>{
//   setclear({
//     textDecoration:"line-through",
//     color:"gray"
//   })
// }
  return (
    <>
      <div className="main-con">
        <h1 className='caption'>Todo List.</h1>
        <input type="text" placeholder='Add Items' className='inputblock' 
           value={inputlist}
           onChange={(e)=>setinputlist(e.target.value)}
        /> 
         {
                 toggle? <button className='addbtn' onClick={additems} title='Add Item'>Add</button> :
                     <button className='addbtn' onClick={additems} title='Update'>Update</button>
          }
        
   
        {
          listitems.map((dataElm) => {
            return <div className='second-con'>
               <h1 className='dataStyle' key={dataElm.id}>Product:{dataElm.name} 
               {/* <button onClick={done} title='Done' className='delBtn'>Done</button> */}
               <button onClick={()=>editItem(dataElm.id)} title='edit Item' className='delBtn'>Edit</button>
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