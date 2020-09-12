import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ComentarioApi from "../api/ComentarioApi";

function preventDefault(event) {
  event.preventDefault();
}

export default function Comentarios({id}) {

  const [comentarios, setComentarios] = useState(undefined);

  useEffect(() => {
    var promise = ComentarioApi.getAll();
    promise
      .then((response) => {
        setComentarios(response.data);
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
      {comentarios && (

        <div className="card space-card">
            <div className="card-header">Comentários</div>

            <div className="card-body">
                <table className="table">
                    <tbody>
                    {comentarios.filter(comentarios => comentarios.id_postagem == id).map((row) => (
                        <tr className="d-flex" key={row.id}>
                            <td className="col-2">{row.autor_comentario}</td>
                            <td className="col-10">{row.texto_comentario}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
      )}
    </>
  );
}
