
import './App.css';
import React, { useState } from 'react';

function App() {
  
  const [webIsChecked, setWebIsChecked] = useState(true);
  const [seoIsChecked, setSeoIsChecked] = useState(true);
  const [semIsChecked, setSemIsChecked] = useState(true);
  const [total, setTotal]= useState(0);


  const checkWeb = () => {
    setWebIsChecked(!webIsChecked);
    if (webIsChecked == true) {
      setTotal(total + 500);
    } else {setTotal(total - 500)}
  }

  const checkSeo = () => {
    setSeoIsChecked(!seoIsChecked);
    if (seoIsChecked == true) {
      setTotal(total + 300);
    } else {setTotal(total - 300)}
  }

  const checkSem = () => {
    setSemIsChecked(!semIsChecked);
    if (semIsChecked == true) {
      setTotal(total + 200);
    } else {setTotal(total - 200)}
  }

  console.log(total);

  return (
    <div className="divprincipal">
      <h3>Que vols fer?</h3>
      <div>
        <input
          type="checkbox"
          id="web"
          name="web"
          value="web"
          onChange={checkWeb}
        />
        Una página web (500€)
      </div>
      <div>
        <input
          type="checkbox"
          id="seo"
          name="seo"
          value="seo"
          onChange={checkSeo}
        />
        Una consultoria SEO (300€)
      </div>
      <div>
        <input
          type="checkbox"
          id="ads"
          name="ads"
          value="ads"
          onChange={checkSem}
        />
        Una campaña de google ads (200€)
      </div>
      <div className="resultat">
        El preu es de: {total} €
      </div>
    </div>
  );
}

export default App;
