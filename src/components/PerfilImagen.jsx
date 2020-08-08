import React from 'react';

function PerfilImagen({url, alt}) {
  const style = {
    width: `90%`, 
    borderRadius: "10px",
    objectFit: "contain",
  }
  return (
    <>
      <img style={style} src={url} alt={alt} />
    </>
  );
}

export default PerfilImagen;
