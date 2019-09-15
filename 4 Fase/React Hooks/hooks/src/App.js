import React, { useState } from 'react';

function App() {
  /**
   * Desestrutura pq o useState retorna o estado e uma Função
   */
  const [tech, setTech] = useState([
    'React js',
    'React native',
    'node.js'
  ]);
  const [newTech, setNewTech] = useState('')

  function handleAdd(){
    setTech([...tech, newTech])
    setNewTech('')
  }

  return (
    <>
      <ul>
        {tech.map(t=> <li key={t}>{t}</li>)}
      </ul>
      <input type="text" onChange={e => setNewTech(e.target.value) } name="" value={newTech} id=""/>
      <button type='button' onClick={handleAdd}>Adicionar </button>
    </>
  );
}

export default App;
