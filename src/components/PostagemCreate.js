import React, { useEffect, useState } from "react";
import PostagemApi from "../api/PostagemApi";
import { toast } from "react-toastify";

export default function PostagemCreate({ history }) {
  
    const [errors, setErrors] = useState({});
  
    const [postagem, setPostagem] = useState({
      id: Math.floor(Math.random() * (1000000000000 - 0)) + 0,
      titulo_postagem: "",
      autor_postagem: "",
      curtida_postagem: 0,
      texto_postagem: "",
    });
  
    function submitForm(event) {
      event.preventDefault();
  
      PostagemApi.add(postagem)
        .then((response) => {
          history.push("/postagens");
          toast.success("Postagem feita com sucesso!");
        })
  
        .catch((error) => {
          toast.error(`Erro: ${error}`);
        });
    }
  
    function changeHandler(event) {
      setErrors({});
  
      setPostagem({ ...postagem, [event.target.name]: event.target.value });
    }
  
    return (
      <>

        <div className="container">

            <h1>NOVA POSTAGEM</h1>

            <div className="row">

                <div className="card space-card w-100" style={{width: 18 + 'rem'}}>
                    <div className="card-body">
                        <form onSubmit={submitForm}>        
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Nome</span>
                                </div>

                                <input type="text" name="autor_postagem" id="autor_postagem" label="Autor" autoComplete="autor_postagem" className="form-control" onChange={changeHandler} />
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Título</span>
                                </div>

                                <input type="text" name="titulo_postagem" id="titulo_postagem" label="Titulo" autoComplete="titulo_postagem" className="form-control" onChange={changeHandler} />
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Texto</span>
                                </div>

                                <input type="text" name="texto_postagem" id="texto_postagem" label="Texto" autoComplete="texto_postagem" className="form-control" onChange={changeHandler} />
                            </div>

                            <button type="submit" className="btn btn-primary">Fazer Postagem</button>
                        </form>
                    </div>
    
                </div>

            </div>

        </div>

      </>
    );
  }
  