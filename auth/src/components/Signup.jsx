import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="col-12 col-md-3">
        <div className="card">
          <div className="card-body">
            <h4 className="mb-4">Signup</h4>
            <form>
              <div className="mb-3">
                <label>Email</label>
                <input type="email" name="email" className="form-control" />
              </div>
              <div className="mb-3">
                <label>Username</label>
                <input type="email" name="email" className="form-control" />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input type="password" name="password" className="form-control" />
              </div>
              <div className="mb-3">
                <label>Password Confirmation</label>
                <input type="password" name="password_confirmation" className="form-control" />
              </div>

              <div className="text-end">
                <button type="submit" className="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-4 text-center">
          <span>
            Already have an account?
            <Link to='/signin' className="ms-2">Sign In</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Signup
