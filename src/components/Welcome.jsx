import '../styles/Welcome.css';
import history from '../assets/history.png';

export function Welcome({ btnStart }) {

  
  return (
      <div className='init-form'>
        <h1>Benvinguts !!!!</h1>
        <h2>Descripció del projecte</h2>
        <h5>Ja has arribat al teu primer lliurament de React! Una vegada tenint els conceptes clars de javascript, veuràs que <strong>amb l'ajuda de React, podràs fer de manera fàcil i ràpida aplicacions més potents del que podíem fer amb Javascript pla</strong> (vanilla Javascript).</h5>
        <h5>Pren-te amb calma aquest lliurament, els primers passos en React costen una mica, ja que has d'entendre la manera en la qual les aplicacions en React es construeixen. No oblidis que en React, la web la dividim en petits trossos o components, que són mòduls reutilitzables que representen una part de la nostra aplicació. Aquestes parts poden ser grans o petites, però, generalment, estan ben definides: tenen un propòsit únic i obvi.</h5>
        <h5>En aquest lliurament posarem en pràctica els conceptes bàsics que has après de React.&nbsp;</h5>
        <h5><strong>Un/a client/a</strong> que té com a producte principal una web de gestió empresarial desenvolupada amb React, ens ha demanat que <strong>desenvolupem un tutorial, en el qual mitjançant dos botons els nous usuaris puguin avançar i retrocedir en els consells, modificant-se el text d'ajuda i la imatge de fons.</strong></h5>
        <h5>Com de moment no tenim el material necessari per crear el tutorial, li mostrarem al client/a els següents 4 passos:</h5>
        <img src={history} width='400px'></img>
        <p></p>
        <button onClick={btnStart}>Som-hi</button>
      </div>
  );
}