import React, { useContext, useState, useRef } from "react";
import modalStyle from "./CameraModal.module.css";
import { AppContext } from "../Context/AppContext";

function CameraModal() {
  const [img, setImg] = useState(null);
  const { setCameraClicked } = useContext(AppContext);
  const fileInputRef = useRef(null);
  const browseFileRef = useRef(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setImg(imgURL);
    }
  };

  const openCamera = () => {
    fileInputRef.current.click();
  };

  const browseFile = () => {
    browseFileRef.current.click();
  };

  return (
    <div className={modalStyle.main_container}>
      <div className={modalStyle.input_container}>
        <button className={modalStyle.close_btn} onClick={() => setCameraClicked(false)}>
          X
        </button>

        <span className={modalStyle.input_container_header}>
          Upload or Capture a Photo.
        </span>

        <div className="d-flex justify-content-center align-items-center gap-5">
          <button className={modalStyle.capture_btn} onClick={browseFile}>
            Browse File
          </button>
          <input
            type="file"
            accept="image/*"
            ref={browseFileRef}
            className={modalStyle.hidden_input}
            onChange={handleFileChange}
          />
          <button className={modalStyle.browse_btn} onClick={openCamera}>
            Capture Photo
          </button>
          <input
            type="file"
            accept="image/*"
            capture="environment"
            ref={fileInputRef}
            className={modalStyle.hidden_input}
            onChange={handleFileChange}
          />
        </div>
        {img && <img src={img} alt="Captured Preview" className={modalStyle.preview_image} />}
      </div>
    </div>
  );
}

export default CameraModal;