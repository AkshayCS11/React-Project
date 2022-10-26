import React,{useState} from 'react'
import UploadFile from '../Excelupload/UploadFile';
import DisplayData from '../Excelupload/Displaydata';
import Employeeform from './AddEmployee.js';


function Formandexcel() {
    
const [uploadedExcelData, setUploadedExcelData] = useState([]);
const uploadedExcelDataHandler = (data) => {
        setUploadedExcelData(data);};
 
return (
    <div>
      <Employeeform/>
      <UploadFile onUploadExcelFile={uploadedExcelDataHandler} />
      <DisplayData excelData={uploadedExcelData}/>
    </div>
  )
}

export default Formandexcel