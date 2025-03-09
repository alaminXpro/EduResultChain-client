"use client";

import { useState } from "react";
import Image from "next/image";
import "./certificate.css";
import Certificatetemplate from "./certificatetemplate.png";
import html2canvas from "html2canvas";

const CertificateForm = () => {
  const [formData, setFormData] = useState({
    board: "",
    name: "",
    fatherName: "",
    motherName: "",
    college: "",
    roll: "",
    regNo: "",
    gpa: "",
    examYear: "",
    publicationDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDownload = () => {
    const isConfirmed = window.confirm("Are you sure you want to download the certificate?");
    if (!isConfirmed) return;

    const certificateElement = document.querySelector(".certificate-overlay") as HTMLElement;

    if (certificateElement) {
      html2canvas(certificateElement).then(canvas => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "certificate.png";
        link.click();
      });
    }
  };

  return (
    <div className="certificate-wrapper">
      <div className="form-container">
        <h2>Enter Certificate Details</h2>
        <div className="form-grid">
          <label>
            Board Name: <input type="text" name="board" value={formData.board} onChange={handleChange} />
          </label>
          <label>
            Name: <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label>
            Father&apos;s Name:{" "}
            <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} />
          </label>
          <label>
            Mother&apos;s Name:{" "}
            <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} />
          </label>
          <label>
            College: <input type="text" name="college" value={formData.college} onChange={handleChange} />
          </label>
          <label>
            Roll No: <input type="text" name="roll" value={formData.roll} onChange={handleChange} />
          </label>
          <label>
            Registration No: <input type="text" name="regNo" value={formData.regNo} onChange={handleChange} />
          </label>
          <label>
            GPA: <input type="text" name="gpa" value={formData.gpa} onChange={handleChange} />
          </label>
          <label>
            Exam Year: <input type="text" name="examYear" value={formData.examYear} onChange={handleChange} />
          </label>
          <label>
            Publication Date:{" "}
            <input type="text" name="publicationDate" value={formData.publicationDate} onChange={handleChange} />
          </label>
        </div>
      </div>

      <button className="download-button" onClick={handleDownload}>
        Download Certificate
      </button>

      <div className="certificate-container">
        <div className="certificate-overlay">
          <Image src={Certificatetemplate} alt="Certificate Template" width={1080} height={768} />
          <div className="certificate-text title">{formData.board}</div>
          <div className="certificate-text serial">Serial No. DBH 9027926</div>
          <div className="certificate-text country">BANGLADESH</div>
          <div className="certificate-text reg-no">Registration No. {formData.regNo}</div>
          <div className="certificate-text student-name">This is to certify that {formData.name}</div>
          <div className="certificate-text parent">
            Son/Daughter of {formData.fatherName} and {formData.motherName}
          </div>
          <div className="certificate-text college">of {formData.college}</div>
          <div className="certificate-text roll">Roll No. {formData.roll}</div>
          <div className="certificate-text exam">Higher Secondary Certificate Examination, {formData.examYear}</div>
          <div className="certificate-text gpa">G.P.A {formData.gpa} on a scale of 5.00</div>
          <div className="certificate-text date">Date of Publication of Results: {formData.publicationDate}</div>
        </div>
      </div>
    </div>
  );
};

export default CertificateForm;
