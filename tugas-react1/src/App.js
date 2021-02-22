import React from 'react'
import BMI from './Component/BMI';
import Bank from './Component/Bank';
import HargaAkhir from './Component/HargaAkhir';
import Biner from './Component/Biner';
import Oktal from './Component/Oktal';
import Desimal from './Component/Desimal';
import Heksadesimal from './Component/Heksadesimal';

function App() {
  return (
    <div>
      <BMI />
      <Bank />
      <HargaAkhir />
      <Biner />
      <Oktal />
      <Desimal />
      <Heksadesimal />
    </div>
  );
}

export default App;
