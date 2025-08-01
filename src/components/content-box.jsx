import { useContext, useEffect, useState } from 'react';
import './content-box.css';
import { AuthContext } from './AuthContext';


const Content =()=>{

  const{listss}=useContext(AuthContext);

  const[rTopic,setRTopic]=useState([]);
  useEffect(()=>{
    setRTopic(listss);
  },[listss])

  const[searchTerm,setSearchTerm] = useState('');

  const HandelSearch=(e)=>{
    const value1 = e.target.value;
    setSearchTerm(value1);

    const filteredList= listss.filter((item)=>
      item.TopicName.toLowerCase().includes(value1.toLowerCase()));
      setRTopic(filteredList);
  };

  const handleDelete = (id)=>{
    const updateList = rTopic.filter((item)=>item.id !== id);
    setRTopic(updateList);
  }
    
  

  
  return(
    <>
      <input className="search-in rounded-pill border-0 pt-3 pb-3 ps-4 w-50 mb-5" type="search" placeholder="Search your notes...." value={searchTerm} onChange={HandelSearch} />
    
      <div className='d-flex align-items-center justify-content-around p-5 flex-wrap gap-5'>  
          {
            rTopic.map((tt)=>{
              return( <div key={tt.id} className="card-div p-4 bg-white">
                <h4>{tt.TopicName}</h4>
                <p>{tt.date}</p>
                <p className='m-0'>{tt.content}</p>
                  <svg type='button' onClick={()=>{handleDelete(tt.id)}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="delete-btn bi bi-trash3 text-danger" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                  </svg>
              </div>
              )
            })
          }
      </div>

    </>
  )
}

export default Content;