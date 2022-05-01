import React from 'react';
import Star from './Star';
import { useEvaluation } from '../../context/Evaluation/EvaluationProvider';
import './style.scss';

const StarRating = () => {
  const { evalData, setEvalData } = useEvaluation();

  const changeRating = (newRating, e) => {
    e.preventDefault();
    setEvalData({
      ...evalData,
      rate: newRating
    });
  };

  const arrFill = [1, 2, 3, 4, 5].map((value) => (
    <button key={value}>
      <Star filled={value <= evalData.rate} onClick={(e) => changeRating(value, e)} />
    </button>
  ));

  return (
    <span>
      {arrFill}
    </span>
  )
}

export default StarRating;