import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import converter from './CurrencyConverter.module.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../Context/AppContext';
import CameraModal from '../CameraModal/CameraModal';
import Swal from "sweetalert2";

function CurrencyConverter() {
  const { setCameraClicked, cameraClicked } = useContext(AppContext);

  const [convertedCurrency, setConvertedCurrency] = useState(0)
  const [currencyList, setCurrencyList] = useState([])
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [amount, setAmount] = useState(1)
  const [rates, setRates] = useState({});

  useEffect(() => {
    axios.get('https://api.exchangerate-api.com/v4/latest/EGP')
      .then(res => {
        setCurrencyList(Object.keys(res.data.rates))
        setRates(res.data.rates)

      })
      .catch(err => {
        console.error(err);
      });
  }, [])

  const handleAmountChange = (amountVal) => {
    if (amountVal <= 0) {
      Swal.fire({
        icon:'error',
        title:'Amount Value is Invalid',
        text:'Enter Amount that is greater than 1',
        confirmButtonColor:'OK'
      })
    }
    else {
      setAmount(amountVal)
    }
  }
  const handleConvert = () => {
    if (!selectedCurrency || !rates[selectedCurrency]) {
      console.log('error');
    }
    let ans;
    ans = amount / rates[selectedCurrency];
    // console.log(rates[selectedCurrency]);
    // console.log('ss');
    // console.log(selectedCurrency);
    // console.log(amount);
    setConvertedCurrency(ans.toFixed(2))
  }


  return (
    <>
      {cameraClicked && <CameraModal />}

      <div className={converter.main_container}>
        <Navbar />
        <div className='d-flex justify-content-start flex-column gap-2 mt-5'>
          <p className={converter.converter_header}>Currency converter Tool</p>
          <span className={converter.converter_txt}>You Can Convert any Currecny To EGP</span>
        </div>
        <div className='row gx-0 d-flex justify-content-center align-items-center g-5'>
          <div className='col-12 d-flex justify-content-center'>
            <input type='number' value={amount} onChange={(e) => handleAmountChange(e.target.value)} className={converter.currency_input} />
          </div>
          <div className='col-12 d-flex justify-content-center'>
            <select value={selectedCurrency} onChange={(e) => setSelectedCurrency(e.target.value)} className={converter.select_input}>
              <option value="" disabled>Select your option</option>
              {
                currencyList.map(choice =>
                (
                  <option key={choice}>{choice}</option>
                ))
              }
            </select>
          </div>
          <div className='col-12 d-flex justify-content-center g-5'>
            <span className={converter.egp}>{convertedCurrency} Egp</span>
          </div>
        </div>
        <button className={converter.convert_btn} onClick={handleConvert}>Convert</button>
        <FontAwesomeIcon icon={faCamera} className='camera_icon' onClick={() => setCameraClicked(true)} />
        <Footer />
      </div>
    </>

  );
}

export default CurrencyConverter;