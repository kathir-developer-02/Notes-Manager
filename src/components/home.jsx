import './sign-in.css';
import './home.css';
import Content from "./content-box";
import Add from "./add-notes";
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate } from 'react-router-dom';



const Home =()=>{
  const {show, ShowOrHide, isAuthenticated, SignOut}=useContext(AuthContext);


  if(!isAuthenticated){
      return <Navigate to="/" />
    };

  return(
    <>
      <header>
        <div className="d-flex align-items-center justify-content-between pe-4 pb-3">
          <div>
            <div className="d-flex align-items-center ps-3 pt-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-pencil-square ms-3 text-info" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
              </svg>
              <h4 className="ms-1 mb-0">Notomatic</h4>
            </div>
            
            <p className="text-secondary ps-3 ms-3">Manage your notes</p>
          </div>
          <div className="pt-3 d-flex flex-column align-items-end gap-3">
              <button onClick={SignOut} className='sign-out-btn'>Sign Out</button>
              <button onClick={ShowOrHide} className="add-btn bg-primary rounded-pill text-white ps-4 pt-1 pe-4 pb-1 fw-bold border-0">Add +</button>
          </div>
        </div>
          
      </header>
      <hr className="hr-line border-dark m-0"/>
      <div className="main-div text-center pt-5">

        <Content />

        {show&&<Add />}
      </div>
    </>

  )
}

export default Home;