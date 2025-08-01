import './Sign-Up.css';
import { Link } from 'react-router-dom';


const SignUp =()=>{

  return (
    <>
    <div className="main1 d-flex flex-column-reverse d-lg-flex flex-lg-row">
      <div className='sign1 col-12 col-lg-6'>
        <div className="d-flex align-items-center p-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-pencil-square ms-3 text-info" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
          </svg>
          <h4 className="ms-4 mb-0">Notomatic</h4>
        </div>
        <div className="pt-4">
          <div className="text-center">
            <h1 className="fw-bold">Sign Up <br/>to access your team notes</h1>
          </div>
          <div className='inp-div1'>
            <form action="" className="d-flex justify-content-center flex-column align-items-center">
              <input type="email" className="email-inp1 m-4 rounded-pill fs-5" placeholder="Email"/>
              <input type="password" className="password-inp1 rounded-pill fs-5" placeholder="Password"/>
              <input type="password" className="password-inp1 rounded-pill fs-5 m-4" placeholder="Password (Repeat)"/>
              <button className="sign-btn1 rounded-pill p-1 bg-primary text-light fw-bold fs-5">Sign Up!</button>
            </form>
            <p className="p-3 text-center">Already have an account ? <Link to='/' className="btn text-info text-decoration-underline p-0 fw-medium">Sign in</Link></p>
          </div>
        </div>
      </div>
      <div className="side1 d-flex justify-content-center align-items-center  col-12 col-lg-6 text-white">
        <div className="d-flex flex-column">
          <div className="d-flex align-items-center">
            <svg className="ms-3 text-info" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
              <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
            </svg>
            <h1 className="mb-0">Notomatic</h1>
          </div>
          <div>
            <p className="fs-4">One place for the team notes</p>
          </div>
        </div>
      </div>
    </div>

    </>

  )
}

export default SignUp;