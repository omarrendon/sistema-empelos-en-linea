import React from 'react';

function PerfilImagen({url, alt, width}) {
  const style = {
    width: `100%`,
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
