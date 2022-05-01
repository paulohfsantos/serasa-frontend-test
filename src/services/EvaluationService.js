import axios from 'axios';

const baseURL = 'http://localhost:5000';

export const EvaluationService = {
  createResponse: (body={}) => {
    return axios.post(`${baseURL}/responses`, body);
  }
}