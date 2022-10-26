import React, { useState } from "react";
import UploadFile from "../Excelupload/UploadFile";
import DisplayData from "../Excelupload/Displaydata";
import Customerform from "./Addcustomer";

function Customerupload() {
  const [uploadedExcelData, setUploadedExcelData] = useState([]);
  const uploadedExcelDataHandler = (data) => {
    setUploadedExcelData(data);
  };

  return (
    <div>
      <h1>Upload Customer Data</h1>
      <UploadFile onUploadExcelFile={uploadedExcelDataHandler} />
      <DisplayData excelData={uploadedExcelData} />
    </div>
  );
}

export default Customerupload;
