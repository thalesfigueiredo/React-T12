import React, { useState, useEffect } from "react";
import PostagemApi from "../api/PostagemApi";
import { toast } from "react-toastify";
import Curtidas from "./Curtidas";

export default function Postagens() {
  
  // useState => cria novo state
    const [postagens, setPostagens] = useState(undefined);
  
    useEffect(() => {
      var promise = PostagemApi.getAll();
      promise
        .then((response) => {
          setPostagens(response.data);
        })
        .catch((error) => {
          toast.error("Erro: " + error);
        });
  
      return () => {
        // componentDidUnmount()
      };
    }, []);
  
    return (
      <>
        {postagens && (
          <>
            <React.Fragment>

                <div className="container">
        
                    <h1>Home</h1>

                    <div className="row">
                        {postagens.map((card) => (
                        <div key={card.id} className="col-sm-4">
                            <div className="card space-card">
                                <div className="card-body">
                                    <h5 className="card-title">{card.titulo_postagem}</h5>
                                    <p className="card-text">{card.texto_postagem.length < 35
                                        ? `${card.texto_postagem}`
                                        : `${card.texto_postagem.substring(0, 32)}...`}</p>
                                    
                                    <Curtidas curtidas={card.curtida_postagem} />

                                    <button className="btn btn-primary" onClick={() => (window.location.href = `postagem/show/${card.id}`)}>
                                      Comentar
                                    </button>
                                    
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>

                </div>

            </React.Fragment>
          </>
        )}
      </>
    );
  }
  