import React from 'react'
import { Link } from 'react-router-dom'
import faker from 'faker'
import crypto from 'crypto'

const ProductList = () => {
  const newProducts = [...Array(18).keys()].map(p => {
    const randomString = crypto.randomBytes(8).toString('hex')
    const name = faker.commerce.productName()
    const image = `${faker.image.fashion(180, 180)}?random=${p}`
    const price = faker.commerce.price()

    return (
      <div className="col-6 col-md-3 col-lg-2" key={p}>
        <div className="card h-100">
          <img src={image} className="card-img-top" alt={name} loading="lazy" />
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
    <div className="row g-4">
      { newProducts }
    </div>
  )
}

export default ProductList
