import React, { useEffect, useRef } from 'react'
import { mount } from 'products/ProductsApp'
import { useHistory } from 'react-router-dom'

const ProductsApp = () => {
  const ref = useRef(null)
  const history = useHistory()

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathName }) => {
        const { pathname } = history.location
        if (pathname !== nextPathName) {
          history.push(nextPathName)
        }
      }
    })

    history.listen(onParentNavigate)
  }, [])

  return (
    <div ref={ref}></div>
  )
}

export default ProductsApp
