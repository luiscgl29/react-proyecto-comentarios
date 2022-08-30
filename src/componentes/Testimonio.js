import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt={`Foto de ${props.imagen}`}
      />

      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p
          className='texto-testimonio'
          dangerouslySetInnerHTML={{ __html: props.testimonio }} //dangerouslySetInnerHTML hace que el texto normal se convierta en html, lo inyecta para que las etiquetas validen su funcionamiento, en este caso negrita. Por otro lado dentro de las etiquetas de "p" y sin dangerously debe ir "{props.textimonio}" para validar el testimonio sin negrita, las comillas únicamente son para marcar que se trata de una frase.
        ></p>
      </div>
    </div>
  );
}

export default Testimonio;
