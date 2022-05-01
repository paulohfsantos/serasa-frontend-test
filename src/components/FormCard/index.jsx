import React from 'react';
import StarRating from '../StarRate/StarRating';
import Button from '../Button';
import { useEvaluation } from '../../context/Evaluation/EvaluationProvider';
import { useLoading } from '../../context/Loading/LoadingProvider';
import { useSnackbar } from '../../context/Snackbar/SnackbarProvider';
import './style.scss';

const FormCard = () => {

  const { createEvaluation, evalData, setEvalData } = useEvaluation();
  const { setLoading } = useLoading();
  const { setSnack } = useSnackbar();
  const nameRef = React.useRef(null);
  const commentRef = React.useRef(null);

  const resolveForm = (e) => {
    e.preventDefault();

    let newEvaluation = {
      name: nameRef.current.value,
      comment: commentRef.current.value,
      rate: evalData.rate,
    };

    setLoading(true);

    createEvaluation(newEvaluation)
      .then((res) => {
        console.log(res.data);

        setLoading(false);
        setSnack({
          message: "Success",
          visible: true,
          variant: "success"
        })

        setTimeout(() => {
          setSnack({
            visible: false,
          })
        }, 2000);

        nameRef.current.value = '';
        commentRef.current.value = '';
        setEvalData({
          ...evalData,
          rate: 0
        })
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setSnack({
          message: `Erro ao enviar avaliação`,
          visible: true,
          variant: "error",
        })

        setTimeout(() => {
          setSnack({
            visible: false,
          })
        }, 2000);
      })
  }

  const clearForm = () => {
    nameRef.current.value = '';
    commentRef.current.value = '';
    setEvalData({
      ...evalData,
      rate: 0
    })
  }

  const changeName = () => {
    setEvalData({
      ...evalData,
      name: nameRef.current.value
    });
  }

  const changeComment = () => {
    setEvalData({
      ...evalData,
      comment: commentRef.current.value
    });
  }

  return (
    <div className="card">
      <div className="form">
        <form onSubmit={resolveForm}>
          <div className="star-rating">
            <span>Marque de 1 à 5 estrelas</span>
            <StarRating />
          </div>
          <div className="form-group">
            <label htmlFor="name">
              Nome
            </label>
            <input
              type="text"
              id="name"
              ref={nameRef}
              onChange={changeName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="commentary">
              Comentário (opcional)
            </label>
            <textarea
              type="text"
              id="commentary"
              ref={commentRef}
              onChange={changeComment}
            />
          </div>

          <div className="form-group btn">
            <Button
              variant="error"
              type="button"
              outline
              onClick={() => clearForm()}
            >
              Limpar
            </Button>
            <Button
              type="submit"
              variant="success"
            >
              Enviar Avaliação
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormCard;