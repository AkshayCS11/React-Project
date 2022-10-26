import React,{useState} from 'react'
import UploadFile from '../Excelupload/UploadFile';
import DisplayData from '../Excelupload/Displaydata';

function Employeeupload() {
    
const [uploadedExcelData, setUploadedExcelData] = useState([]);
const uploadedExcelDataHandler = (data) => {
        setUploadedExcelData(data);};
 
return (
    <div>
      <h1 align='center'>UPLOAD EMPLOYEE DATA</h1>
      <UploadFile onUploadExcelFile={uploadedExcelDataHandler} />
      <DisplayData excelData={uploadedExcelData}/>
    </div>
  )
}

export default Employeeupload;