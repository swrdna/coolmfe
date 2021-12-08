import React from 'react'
import { Link } from 'react-router-dom'

const Signin = ({ onSignIn }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="col-12 col-md-3 col-lg-3">
        <div className="card">
          <div className="card-body">
            <h4 className="mb-4">Sign In</h4>
            <form>
              <div className="mb-3">
                <input type="email" name="email" className="form-control" placeholder="Email or Username" />
              </div>
              <div className="mb-3">
                <input type="password" name="password" className="form-control" placeholder="Password" />
              </div>

              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={onSignIn}
                >
                  Login
                </button>
              </div>
            </form>

          </div>
        </div>
        <div className="mt-4 text-center">
          <span>
            Don't have an account?
            <Link to='/signup' className="ms-2">Create new</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Signin
