import React from 'react'
import EvaluationContext from './EvaluationContext';
import { EvaluationService } from '../../services/EvaluationService';

export function useEvaluation() {
  return React.useContext(EvaluationContext);
}

export const EvaluationProvider = ({ children }) => {
  const [evalData, setEvalData] = React.useState({
    name: '',
    comment: '',
    rate: 0,
  });

  // const getAllEvaluations = async () => {
  //   const evaluations = await EvaluationService.getAllResponses()
  //   return evaluations
  // }

  // const getEvaluation = async (id=0) => {
  //   const evaluation = await EvaluationService.getResponseById(id)
  //   return evaluation
  // }

  const createEvaluation = async (evaluation={}) => {
    const newEvaluation = await EvaluationService.createResponse(evaluation)
    return newEvaluation
  }

  const generalValues = {
    evalData,
    setEvalData,
    // getAllEvaluations,
    // getEvaluation,
    createEvaluation,
  }

  return (
    <EvaluationContext.Provider value={generalValues}>
      { children }
    </EvaluationContext.Provider>
  )
}