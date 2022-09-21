import React,{useEffect,useState} from 'react';
import axios from 'axios';
import CardList from './CardList';

const UserList = () => {
const  [listUsers,setListUsers] =useState([]);
const  [error,setError] =useState(null);
useEffect(() =>{
    axios.get('https://jsonplaceholder.typicode.com/users')
         .then((res) => {
            setListUsers(res.data);
         })
         .catch((err) =>setError(err));
},[])
  return (
    <div>
      {console.log(listUsers)}
      {listUsers.map((data) =>
      <CardList listUsers={data} />
      )};
    </div>
  );
};

export default UserList;
