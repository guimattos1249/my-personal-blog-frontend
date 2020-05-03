import React, { useState } from 'react';

import Navbar from '../../components/navbar';

// import api from '../../services/api';

function NewPost () {
  const [title, setTitle] = useState(); 
  const [date] = useState(new Date().toLocaleDateString());
  const [description, setDescription] = useState(); 
  const [content, setContent] = useState();
  // const [id_category, setIdCategory] = useState();

  function handleNewPost (e){
    e.preventDefault();

    console.log(title);
    console.log(date);
    console.log(description);
    console.log(content);
  }

  return (
    <div>
      <Navbar />
      <h1>New Post</h1>
      <form action="" onSubmit={handleNewPost}>
        <input 
          type="text" 
          value={title}
          required
          placeholder="Título do Post" 
          onChange={e => setTitle(e.target.value)}
        />
        <input 
          type="text" 
          value={description}
          required
          placeholder="Descrição do Post" 
          onChange={e => setDescription(e.target.value)}
        />
        <textarea 
          placeholder="Conteúdo" 
          value={content}
          required
          onChange={e => setContent(e.target.value)}
        />

        {/* <select name="" id="">
          <option disabled selected required>Selecione uma Categoria</option>
        </select> */}

        <button type="submit">Criar</button>
      </form>
      
    </div>
  );
}

export default NewPost;