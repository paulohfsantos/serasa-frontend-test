import React from 'react'
import SnackContext from './SnackbarContext'
import Snackbar from './Snackbar'

export function useSnackbar() {
  return React.useContext(SnackContext);
}

export const SnackbarProvider = ({ children }) => {
  const [snack, setSnack] = React.useState({
    message: "",
    visible: false,
    variant: "",
  });

  const contextVal = {
    setSnack,
    snack,
  }

  return (
    <SnackContext.Provider value={contextVal}>
      <Snackbar message={snack.message} />
      { children }
    </SnackContext.Provider>
  )
}
