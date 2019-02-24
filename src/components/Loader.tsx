import React from 'react'
import { Loader } from 'react-bulma-components'

const LoaderWrapper = () => {
  return (
    <div className="loader-container">
      <Loader
        style={{
          width: 50,
          height: 50,
          border: '3px solid #dbdbdb',
          borderTopColor: 'transparent',
          borderRightColor: 'transparent'
        }}
      />
    </div>
  )
}

export default LoaderWrapper