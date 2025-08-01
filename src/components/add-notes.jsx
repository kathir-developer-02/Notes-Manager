import { useContext } from 'react';
import './add-notes.css';
import { AuthContext } from './AuthContext';


const Add = ()=>{

  const{newt,setNewTitle,newc,setNewContent,AddNew} = useContext(AuthContext);


  return (
    
  <div className="add-card p-5 rounded">
    <h1>Add Notes</h1>
    <div className='d-flex flex-column align-items-start'>
      <label htmlFor="">Title</label>
      <input type="text" className='title-inp p-1 rounded border-0 text-white fs-5' value={newt} onChange={(e)=>{setNewTitle(e.target.value)}}/>
      <label htmlFor="">Content</label>
      <textarea className='text-area rounded border-0 text-white fs-5' name="contnetBox" id="contnet" value={newc} onChange={(e)=>{setNewContent(e.target.value)}}></textarea>
    </div>
    <button className='add-note rounded-pill fw-bold' onClick={AddNew}>ADD</button>
  </div>
  )
}

export default Add;