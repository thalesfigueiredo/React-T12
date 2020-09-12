import React, { useEffect, useState, component } from "react";
import { Prompt } from "react-router-dom";
import PostagemApi from "../api/PostagemApi";
import Comentarios from "./Comentarios";
import Comentar from "./ComentarioCreate";

export default function PostagemShow({ postagem, match }) {
  const [postagemShow, setPostagemShow] = useState(postagem);

  // 2) executa depois de mount
  useEffect(() => {
    // origem: codigo da rota
    if (match) {
      let idPostagem = +match.params.id;
      PostagemApi.getById(idPostagem).then((response) => {
        setPostagemShow(response.data);
      });
    } else {
      // origem: prop postagem
      setPostagemShow(postagem);
    }
  }, [postagem, match]);

  return (
    <>

      {postagemShow && (

        <div className="container">

            <h1>POSTAGEM</h1>

            <div className="row">

                <div className="card space-card w-100" style={{width: 18}}>
                    <div className="card-body">
                        <h5 className="card-title">{postagemShow.titulo_postagem}</h5>
                        <p className="card-text">{postagemShow.texto_postagem}</p>
                        
                        <Comentarios id={postagemShow.id} />

                        <Comentar id={postagemShow.id} />

                    </div>

                </div>

            </div>

        </div>

      )}
    </>
  );
}
