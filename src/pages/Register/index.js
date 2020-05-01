import React from 'react';
import { Link } from 'react-router-dom';

function Register () {

  return (
    <div>
      <h1>Registre-se</h1>
      <Link to='/'>
        <p>Voltar para menu inicial!</p>
      </Link>
    </div>
  );
}

export default Register;