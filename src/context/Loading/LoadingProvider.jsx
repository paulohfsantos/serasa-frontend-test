import React from 'react'
import LoadingContext from './LoadingContext'
import Loading from './Loading'

export function useLoading() {
  return React.useContext(LoadingContext);
}

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(false);

  const contextVal = {
    loading,
    setLoading
  }

  return (
    <LoadingContext.Provider value={contextVal}>
      <Loading name="circle" color="#fff" />
      { children }
    </LoadingContext.Provider>
  )
}