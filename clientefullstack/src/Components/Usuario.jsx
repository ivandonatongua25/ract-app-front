
import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  let { id } = useParams();
  return (
    <div>
      <h2>User ID: {id}</h2>
    </div>
  );
}

export default User;


/*

*/

/*

        <ul>
            <li>
            <li> <a href="http://localhost:2050/users/id" target='_blank' rel = "noreferrer">Usuario por id </a> </li>
            </li>
        </ul>
*/