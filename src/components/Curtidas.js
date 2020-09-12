import React, { Component, useState } from "react";

export default function Curtidas(props) {
  const displayName = Curtidas.name;

  const [curtidas, setCurtidas] = useState(props?.curtidas);

  return (

      <div className="space-like">
          <span className="card-title"><strong>{curtidas}</strong> Curtidas</span>
          <button type="button" className="btn btn-primary btn-sm" onClick={() => setCurtidas(curtidas + 1)}>Curtir</button>
      </div>
      
  );
}
