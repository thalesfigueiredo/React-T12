import React, { useEffect, useState } from "react";
import ComentarioApi from "../api/ComentarioApi";
import { toast } from "react-toastify";

export default function ComentarioCreate({ history, id }) {

  const [errors, setErrors] = useState({});

  const [comentario, setComentario] = useState({
    id: Math.floor(Math.random() * (1000000000000 - 0)) + 0,
    id_postagem: id,
    autor_comentario: "",
    texto_comentario: "",
  });

  function submitForm(event) {
    event.preventDefault();

    ComentarioApi.add(comentario)
      .then((response) => {
        window.location.reload(false);
        toast.success("Comentário realizado com sucesso!");
      })

      .catch((error) => {
        toast.error(`Erro: ${error}`);
      });
  }

  function changeHandler(event) {
    setErrors({});

    setComentario({ ...comentario, [event.target.name]: event.target.value });
  }

  return (
    <>
        <div className="card">
            <div className="card-body">
                <form onSubmit={submitForm}>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Nome</span>
                        </div>

                        <input type="text" className="form-control"
                            name="autor_comentario"
                            label="Autor"
                            type="text"
                            id="autor_comentario"
                            autoComplete="autor_comentario"
                            onChange={changeHandler} />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Comentário</span>
                        </div>

                        <input type="text" className="form-control"
                            name="texto_comentario"
                            label="Texto"
                            type="text"
                            id="texto_comentario"
                            autoComplete="texto_comentario"
                            onChange={changeHandler} />
                    </div>

                    <button type="submit" className="btn btn-primary">Postar Comentário</button>
                </form>
            </div>
        </div>
    </>
  );
}
