import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  /**
   * Desestrutura pq o useState retorna o estado e uma Função
   */
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState('')

  /**
   * useCallback é usado para que n seja necessário o javaScript tirar 
   * e colocar na memória a mesma função
   */
  
  const handleAdd= useCallback(()=>{
    setTech([...tech, newTech])
    setNewTech('')
  }, [tech, newTech])

  /**
   * Para execultar somente uma vez é só colocar sem nenhuma dependencia
   */

   useEffect(()=>{
     const storage = localStorage.getItem('tech')
     if(storage){
       setTech(JSON.parse(storage))
     }
     /**
      * Quando o component for deletado basta retornar a função
      */
     return ()=>{};
   },[])

  /**
   * Recebe uma função e um array das dependencias que serão observadas
   */
  useEffect(()=>{
    localStorage.setItem('tech', JSON.stringify(tech))
  },[tech])

  /**
   * Cria uma variavel que só irá mudar quando o tech mudar
   */
  const techSize = useMemo(()=>tech.length, [tech])
  return (
    <>
      <ul>
        {tech.map(t=> <li key={t}>{t}</li>)}
      </ul>
      <strong>Você tem {techSize} tecnologia</strong>
      <br/>
      <input type="text" onChange={e => setNewTech(e.target.value) } name="" value={newTech} id=""/>
      <button type='button' onClick={handleAdd}>Adicionar </button>
    </>
  );
}

export default App;
