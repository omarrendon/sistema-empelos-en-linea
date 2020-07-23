import React from 'react';

function PerfilImagen({url, alt, width}) {
  const style = {
    width: `${width}px`,
    borderRadius: "10px",
  }
  return (
    <>
      <img style={style} src={url} alt={alt} />
    </>
  );
}

export default PerfilImagen;
