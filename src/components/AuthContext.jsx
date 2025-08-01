import React, {createContext, useEffect, useState} from "react";
import { data } from "./data.js";



export const AuthContext = createContext();

export const AuthProvider = ({children})=>{

  const[listss,setListss]=useState([{
    id :1,
    TopicName :'React-Props', 
    date :'14-02-2025',
    content :'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium aut perspiciatis facere debitis ducimus expedita modi sit, delectus dolore quis temporibus eos provident deleniti, harum omnis eveniet ipsa non alias optio ad fugiat quos velit. Eveniet cupiditate maiores fuga? Cupiditate odio voluptatibus sunt aliquam, sint reprehenderit natus ullam laborum et.'
  },
  {
    id :2,
    TopicName :'React-States', 
    date :'14-02-2025',
    content :'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium aut perspiciatis facere debitis ducimus expedita modi sit, delectus dolore quis temporibus eos provident deleniti, harum omnis eveniet ipsa non alias optio ad fugiat quos velit. Eveniet cupiditate maiores fuga? Cupiditate odio voluptatibus sunt aliquam, sint reprehenderit natus ullam laborum et.'
  },
  {
    id :3,
    TopicName :'React-Hooks', 
    date :'14-02-2025',
    content :'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium aut perspiciatis facere debitis ducimus expedita modi sit, delectus dolore quis temporibus eos provident deleniti, harum omnis eveniet ipsa non alias optio ad fugiat quos velit. Eveniet cupiditate maiores fuga? Cupiditate odio voluptatibus sunt aliquam, sint reprehenderit natus ullam laborum et.'
  },
  {
    id :4,
    TopicName :'React-useEffect()', 
    date :'14-02-2025',
    content :'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium aut perspiciatis facere debitis ducimus expedita modi sit, delectus dolore quis temporibus eos provident deleniti, harum omnis eveniet ipsa non alias optio ad fugiat quos velit. Eveniet cupiditate maiores fuga? Cupiditate odio voluptatibus sunt aliquam, sint reprehenderit natus ullam laborum et.'
  }

]);


  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  
  const[newTitle, setNewTitle] =useState('');
  const[newDate, setNewDate] =useState('');
  const[newContent, setNewContent] =useState('');
  const[show, setShow]=useState(false);

  const dates = new Date(),
  date1 =  dates.getDate() + '-' + (dates.getMonth()+1) + '-' + dates.getFullYear();

  const ShowOrHide =()=>{
    setShow(!show);
    setNewDate(date1);
  }
  const[count,setCount]=useState(5);

  const AddNew=()=>{
    setShow(!show);
    setCount(count+1);
    const newList={
      id: count,
      TopicName: newTitle,
      date: newDate,
      content: newContent
    };
    setListss([...listss, newList]);
    setNewTitle('');
    setNewContent('');
  }


  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [emailId, setEmailId] = useState('');
  const [pass, setPass] = useState('');
  
    useEffect(() => {
      setEmailId(data.map(x=> x.email_id));
      setPass(data.map(x=> x.password));

    },[]);


  const SignIn1 = ()=> {
    
    if(email == emailId && password == pass)
      setIsAuthenticated(true);
    else{
      alert("Invalid email password!");
    }
  }
  const SignOut =()=> setIsAuthenticated(false);
  return(
    <AuthContext.Provider value={{listss, isAuthenticated, SignIn1, newTitle, setNewTitle, newContent, setNewContent, AddNew, ShowOrHide, show, newDate,setEmail,setPassword, SignOut}}>
      {children}
    </AuthContext.Provider>
  )
}