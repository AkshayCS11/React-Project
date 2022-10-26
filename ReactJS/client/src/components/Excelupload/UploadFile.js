import "./UploadFile.css";
import excelToJson from "./Exceltojson";
import React from 'react';

const UploadFile = (props) => {
 
const convertExcelToObject = (file) => {
const reader = new FileReader();
    reader.onload = function (event) {
    const data = new Uint8Array(event.target.result);
    let result = excelToJson({ source: data });
    props.onUploadExcelFile(result.Sheet1);
    };
    reader.readAsArrayBuffer(file);
  };
  const dropHandler = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    convertExcelToObject(file);
  };

  const uploadFileHandler = (event) => {
    const file = event.target.files[0];
    convertExcelToObject(file);
  };

  const dragOverHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="uploadFile">
      <label>Upload using Excel template</label>
      <div>
        <label onDrop={dropHandler} onDragOver={dragOverHandler} htmlFor="file">
          <div>
            <input
              onChange={uploadFileHandler}
              id="file"
              type="file"
              accept=".xlsx, .xls, .csv"
            />
            <div>or drop excel files here</div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default UploadFile;