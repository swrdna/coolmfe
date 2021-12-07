import React from 'react'
import { Link } from 'react-router-dom'
import faker from 'faker'

const ProductDetail = ({ match }) => {
  const productId = match.params.id
  const name = faker.commerce.productName()
  const image = `${faker.image.fashion(256, 256)}?random=${productId}`
  const price = faker.commerce.price()

  return (
    <div className="row">
      <div className="col-12 col-md-3">
      <img src={image} className="img-fluid" alt={name} loading="lazy" />
      </div>
      <div className="col-12 col-md-9">
        <h3>{name}</h3>
        <div className="fw-bold">{price}</div>
        <div className="d-inline-flex mt-4">
          <input type="number" name="stock" className="form-control w-25" defaultValue={1} />
          <button className="btn btn-primary ms-3">Buy</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
