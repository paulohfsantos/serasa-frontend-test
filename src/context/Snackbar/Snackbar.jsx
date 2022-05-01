import React from 'react'
import { useSnackbar } from './SnackbarProvider';
import './style.scss';

const Snackbar = () => {
  const { snack } = useSnackbar();
  
  return (
    <>
      {
        snack.visible &&
        <div className="snackbar">
          <div className={`snackbar-container ${snack.variant}`}>
            <div className="snackbar-msg">
              { snack.message }
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Snackbar
