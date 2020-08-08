import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

function DragnDrop(props) {
  const [myFiles, setMyFiles] = useState([]);

  const onDrop = useCallback(
    acceptedFiles => {
      setMyFiles([...myFiles, ...acceptedFiles]);
    },
    [myFiles]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".pdf, .jpeg, .png, .pdf, .doc",
    minSize: 0,
    maxSize: 1048576
  });
  
  const handleSubmit = file => {
    const newFile = [...myFiles];
    console.log(newFile);
  };

  const removeFile = file => () => {
    const newFiles = [...myFiles];
    newFiles.splice(newFiles.indexOf(file), 1);
    setMyFiles(newFiles);
  };

  const removeAll = () => {
    setMyFiles([]);
  };

  const files = myFiles.map(file => (
    <li key={file.path}>
      <em className="m-1">
        {file.path} 
      </em>
      <button className="btn btn-danger ml-3 mt-2" onClick={removeFile(file)}> Eliminar archivo</button>
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })} className="dnd">
        <input {...getInputProps()} />
        <p>Arrastre su archivo aquí o hacer click aquí</p>
        <em>(Unicamente se poermiten archivos *.jpeg, *.png, *.pdf, *.doc )</em>
      </div>
      <aside className="mt-3">
        <h4>Archivos: </h4> <p>{files}</p>{" "}
        {files.length > 0 && (
          <button
            className="btn btn-success m-2"
            onClick={() => handleSubmit(files)}
          >
            Enviar
          </button>
        )}
      </aside>
      {files.length > 1 && (
        <button className="btn btn-danger ml-3" onClick={removeAll}>
          Eliminar todos los archivos
        </button>
      )}
    </section>
  );
}

export default DragnDrop;

