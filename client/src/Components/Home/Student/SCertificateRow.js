import React, { useEffect, useState } from "react";
import { webFunction } from "../../ContractUtil";
import { dateTime } from "../University/UCertificates";
import "./Scertificate.css";
import { saveAs } from "file-saver";
const SCertificateRow = ({ certificate, index }) => {
  const [access, setAcess] = useState("NOT_PRESENT");
  const [refresh, setRefresh] = useState(false);

  useEffect(()=>{
    console.log("certificate address is  is passed is ",certificate[2])
    // console.log("student address is ",studentAddress)
  })

  useEffect(() => {
    accesssChecker(certificate.uniqueId, certificate.issuedBy);
  }, [refresh]);
  const accesssChecker = async (cuniqueId, addr) => {
    console.log("accesssChecker");
    console.log("cuniqueId", cuniqueId);
    console.log("addr", addr);
    const { contract, accounts } = await webFunction();

    const result = await contract.methods.checkAcess(cuniqueId, addr).call({
      from: accounts[0],
    });
    console.log("result in access checker", result);
    console.log("result in access checker type ", typeof result);
    setAcess(result);
  };
  const requestAcess = async () => {
    console.log("request checker ");

    const { contract, accounts } = await webFunction();
    const result = await contract.methods
      .requestAcess(certificate.uniqueId, certificate.issuedBy)
      .send({
        from: accounts[0],
      });
    console.log("result in request  acesss ", result);
    setRefresh(!refresh);
  };
  const downloadHandler = () => {
    console.log("downloadHandler");
    console.log(
      "certificate",
      `https://infura-ipfs.io/ipfs/${certificate.ipfs}`
    );
    saveAs(`https://infura-ipfs.io/ipfs/${certificate.ipfs}`, "image.jpg");
  };
  return (
   <>
   <tr className="tableHeading">
    <td>{index}</td>

    <td className="addressCopy">
      {certificate["uniqueId"]}{" "}
      <i
        class="fa-solid fa-copy"
        onClick={() => {
          navigator.clipboard.writeText(certificate["uniqueId"]);
        }}
      ></i>
    </td>
    <td>{dateTime(certificate[3])}</td>
    <td>
      {access === "PRESENT" ? (
        <p className="downloadButton" onClick={downloadHandler}>
          DOWNLOAD
        </p>
      ) : access === "NOT_PRESNT" ? (
        <p className="downloadButton" onClick={requestAcess}>
          REQUEST
        </p>
      ) : (
        <p>REQUESTED</p>
      )}
    </td>
  </tr>
   </>
  );
};

export default SCertificateRow;
