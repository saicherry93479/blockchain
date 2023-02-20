import React, { useEffect, useState } from "react";
import { webFunction } from "../../ContractUtil";
import certificateImage from "../../../Images/Certificate.png";
import { dateTime } from "../University/UCertificates";
import "./Scertificate.css";
import SCertificateRow from "./SCertificateRow";
import { Certificate } from "crypto";
const SCertificate = () => {
  const [certificates, setCertificates] = React.useState([]);
  const [refresh, setRefresh] = useState(false);
  const [studentAddress,setStudentAddress]=useState('')
  useEffect(() => {
    console.log("getting all certificates")
    studentHandler();
  }, [refresh]);

  const studentHandler = async () => {

    const { contract, accounts } = await webFunction();

    const studentDetail=await contract.methods.getStudentDetail(accounts[0]).call({
      from:accounts[0]
    })
    console.log('student details are ',studentDetail)
    setStudentAddress(studentDetail[3])



    const result = await contract.methods.getAllCertificates(studentDetail[5]).call({
      from: accounts[0],
    });

    console.log("result in scertificates ", result);
    // console.log(
    //   "certificates------------------------------",
    //   result[0].issuedBy
    // );
    setCertificates(result);
    // console.log("certificates types is ", typeof result[0]);
  };

  return (
    <div className="ustudent">
      {certificates.length === 0 ? (
        <div className="noStudents">
          <img src={certificateImage}></img>

          <p>There are No Certificates Added On Your Profile</p>
        </div>
      ) : (
        <div>
          <table className="table">
            <tr>
              <th>Index</th>

              <th>Unique ID</th>

              <th>Timestamp</th>
              <th>Acesss</th>
            </tr>
            {/* <div className="tableBorder"></div> */}
            {certificates.map((certificate, index) => {
              return  certificate[2]===studentAddress?
                <SCertificateRow
                  certificate={certificate}
                  index={index}
                  
                ></SCertificateRow>:<></>
              
            })}
          </table>
        </div>
      )}
    </div>
  );
};

export default SCertificate;

//  {accesssChecker(certificate[1], certificate["issuedBy"]) ===
//                     "PRESENT" ? (
//                       <p className="downloadButton">Download</p>
//                     ) : accesssChecker(
//                         certificate[1],
//                         certificate["issuedBy"]
//                       ) === "REQUESTED" ? (
//                       <p className="downloadButton">Requested</p>
//                     ) : (
//                       <p
//                         className="downloadButton"
//                         onClick={() =>
//                           requestAcess(certificate[1], certificate["issuedBy"])
//                         }
