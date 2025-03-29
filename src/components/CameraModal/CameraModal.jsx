import React, { useContext, useState, useRef } from "react";
import modalStyle from "./CameraModal.module.css";
import { AppContext } from "../Context/AppContext";

function CameraModal() {
  const [img, setImg] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [confidence, setConfidence] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setCameraClicked } = useContext(AppContext);
  const fileInputRef = useRef(null);
  const browseFileRef = useRef(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setImg(imgURL);
      setPrediction(null); 
      setError(null);

      try {
        setIsLoading(true);
        await predictLandmark(file);
      } catch (err) {
        setError("Failed to process image. Please try again.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const predictLandmark = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setPrediction(data.prediction);
      setConfidence(data.confidence);
    } catch (error) {
      console.error('Error:', error);
      throw error;
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
        <button
          className={modalStyle.close_btn}
          onClick={() => setCameraClicked(false)}
        >
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

        {isLoading && <p className={modalStyle.loading_text}>Processing image...</p>}
        {error && <p className={modalStyle.error_text}>{error}</p>}

        {img && (
          <>
            <img
              src={img}
              alt="Captured Preview"
              className={modalStyle.preview_image}
            />
            {prediction && (
              <div className={modalStyle.result_container}>
                <h3>Prediction Result:</h3>
                <p><strong>Landmark:</strong> {prediction}</p>
                <p><strong>Confidence:</strong> {confidence}</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default CameraModal;