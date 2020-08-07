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

  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    
  } = useDropzone({
    onDrop,
    accept: ".pdf, .jpeg, .png, .pdf, .doc"
  });

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
      {file.path} - {file.size} bytes{" "}
      <button onClick={removeFile(file)}>Remove File</button>
    </li>
  ));
  
   
  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Arrastre su archivo aquí o hacer click</p>
        <em>(Unicamente se poermiten archivos *.jpeg, *.png, *.pdf, *.doc )</em>
      </div>
      <aside style={thumbsContainer}>
        <h3>Archivos: </h3>
        <p>{files}</p>

        
      </aside>
      {files.length > 0 && <button onClick={removeAll}>Remove All</button>}
    </section>
  );
}

export default DragnDrop;

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box"
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden"
};

const img = {
  display: "block",
  width: "auto",
  height: "100%"
};