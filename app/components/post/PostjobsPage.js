import React from 'react';

import './postJobsPage.css';

const Post = props => {
  const { onEnter, onChange, onCancel, title, position, salary, category, description, contact, application } = props;
  return(
    <div> 
      <h1>POST</h1>
      <form onSubmit={ onEnter } 
            onChange={ onChange }
      >
        <div className="details"> 
          Título: <br/> 
          <input type="text" 
                 name="title" 
                 value={ title } 
                 required
          /> 
        </div>
        <div className="details"> 
          Categoría: <br/>
          <input type="text" 
                 name="category" 
                 value={ category } 
          />  
        </div>
        <div className="details"> 
          Salario: <br/> 
          <input type="text" 
                 name="salary" 
                 value={ salary } 
                 required
          /> 
        </div>
        <div className="details"> 
          Posición: <br/> 
          <input type="text" 
                 name="position" 
                 value={ position } 
                 required
          />  
        </div>
        <div id="description"> 
          Descripción: <br/> 
          <textarea type="text" 
                    name="description" 
                    value={ description } 
                    required
          /> 
        </div>
        <div className="details"> 
          Contacto: <br/> 
          <input type="text" 
                 name="contact" 
                 value={ contact } 
                 required
          /> 
        </div>
        <div className="details"> 
          Solicitud: <br/> 
          <input type="text" 
                 name="application"  
                 value={ application } 
          /> 
        </div>
        
        <button type="submit" 
                className="postButton" 
        > 
          Publicar 
        </button>
        <button type="button" 
                className="cancelButton" 
                onClick={ onCancel }
        > 
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default Post;