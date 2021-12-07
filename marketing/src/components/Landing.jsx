import React from 'react'
import { Link } from 'react-router-dom'
import faker from 'faker'
import crypto from 'crypto'

const Landing = () => {
  const newProducts = [...Array(6).keys()].map(p => {
    const randomString = crypto.randomBytes(8).toString('hex')
    const name = faker.commerce.productName()
    const image = `${faker.image.fashion(180, 180)}?random=${p}`
    const price = faker.commerce.price()

    return (
      <div className="col-6 col-md-3 col-lg-2" key={p}>
        <div className="card h-100">
          <img src={image} className="card-img-top" alt={name} />
          <div className="card-body d-flex flex-column justify-content-between">
            <div className="">{name}</div>
            <div className="fw-bold">{price}</div>
          </div>
          <div className="card-footer d-grid">
            <Link to={`/products/${randomString}`} className="btn btn-primary btn-sm">Buy</Link>
          </div>
        </div>
      </div>
    )
  })

  return (
    <>
      <section className="text-center bg-light p-5 rounded">
        <h1>Hello MFE</h1>
        <div className="d-flex justify-content-center py-4 mb-4">
          <div className='col-12 col-md-6'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime fugit iusto, aliquam expedita cum quae mollitia similique nostrum atque dignissimos sit itaque ratione ullam est, ea vitae quibusdam? Deleniti, ex?
          </div>
        </div>
        <Link to="/signup" className="btn btn-primary me-2">Become a Member</Link>
        <Link to="/products" className="btn btn-outline-primary">Shop</Link>
      </section>
      <section className="py-5">
        <h3 className="mb-3">New Arrivals</h3>
        <div className="row g-4">
          { newProducts }
        </div>
      </section>
    </>
    
  )
}

export default Landing
