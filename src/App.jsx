import React from 'react'
import { useState } from 'react'
const App = () => {
  const [long, setlong] = useState(0);
  const [motdepasse, setmotdepasse] = useState('');
  const [caractereS, setcaractereS] = useState('');
  const [chiffre, setchiffre] = useState('');
  const [statuChiffre, setstatuChiffre] = useState(false);
  const [statuCaract, setstatuCaract] = useState(false);

const abc='abcdefghijklmnopqrstuvwxyz'
const Speciaux='!@#$%?&*()';
const Chiff='123456789';
const Reponse='OoNn';


const  Reponses1=(chaine) =>{

  let rep= '';
  for (let i = 0 ; i <= chaine.length; i++) {
    for (let a = 0; a <=Reponse.length; a++) {
    if(chaine[i]=Reponse[a]){
      rep=chaine[i];
  setstatuChiffre(true);
      break;
    }
    }
  }
  
  return rep;
}
const  Reponses2=(chaine) =>{

  let rep= '';
  for (let i=0 ; i<=chaine.length; i++) {
    for (let a = 0; a <=Reponse.length; a++) {
    if(chaine[i]=Reponse[a]){
      rep=chaine[i];
  setstatuCaract(true);
      break;
    }
    }
  }
  
  return rep;
}
const CreatePassword=()=>{
  let pw='';
  for(let i=0; i<=long-2;i++){
    pw+=abc[Math.floor(Math.random()*26)]
  }
  if(statuCaract){
    pw+=Speciaux[Math.floor(Math.random()*10)]
  }
  if(statuChiffre){
    pw+=Chiff[Math.floor(Math.random()*10)]
  }
  setmotdepasse(pw);
  
}


const handleOnChangeMotdepasse= (e) => {

  setmotdepasse(e.target.value);
}
  
  const handleOnChangelong = (e) => {

    setlong(e.target.value);
  }
  const handleOnChangecaractereS= (e) => {

    setcaractereS(e.target.value);
  }
  const handleOnChangechiffre= (e) => {

    setchiffre(e.target.value);
  }



  
  
  return (

    <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
      <form class="container-text"><h1>MT~~Générateur</h1><br />
        <div className='shadow-sm p-4 rounded-3 bg-light'>
          <input
           type='text' 
           class="form-control input-right"
          value={motdepasse}
          onChange={handleOnChangeMotdepasse}
            height="100"
             disabled /><br />

          <br /><div class="form-floating required">
            <input
             type="number"
              class="form-control input-right"
               required 
               value={long} 
               onChange={handleOnChangelong} /><label class="control-label" for="floatingInputValue">Longueur du mot de passe (nombre de caractères)</label>
          </div><div class="p-2"></div><div class="row"><div class="col"><div class="form-floating required">
            <input 
            type="text"
             class="form-control input-right" 
             required
              value={Reponses2(caractereS)}
              onChange={handleOnChangecaractereS}  /> &nbsp; &nbsp;
            <label class="control-label" for="floatingInputValue">Des caractères spéciaux ? &nbsp; </label> &nbsp;
          </div>
          </div>

            <div class="col"><div class="form-floating required ">
              <input 
              type="text" 
              class="form-control input-right"
               required
                value={Reponses1(chiffre)}
                onChange={handleOnChangechiffre} 
                   height=" max-content" /><label class="control-label" for="floatingInputValue">Des chiffres ?&nbsp;</label>
            </div>
            </div>
          </div>
          <div class="mb-4 mt-4"></div>
          <div class=" d-grid justify-content-md-end"><button onClick={CreatePassword} class="btn btn-primary ps-5 pe-5" type="submit">Générer</button>
          </div>
        </div><br /><br /><br />
      </form>
    </div>



  )
}

export default App