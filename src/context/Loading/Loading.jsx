import React from 'react';
import Spinner from 'react-spinkit';
import { useLoading } from './LoadingProvider';
import './style.scss';

const Loading = ({ name, ...props }) => {
  const { loading } = useLoading();

  return (
    <>
      {
        loading &&
        <div className="spinner-container">
          <Spinner name={name} {...props} />
        </div>
      }
    </>
  )
}

export default Loading