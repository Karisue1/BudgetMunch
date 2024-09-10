import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function Home() {
const [students, setStudents] = useState([])

//useEffect(()=>{
  //loadStudents();
//},[]);

//const loadStudents =async ()=>{
 // const result=await axios.get("localhost");
  //setStudents(result.data);
//}

  return (
    <div className="container">
        <div className="py-4">
        <table className="table table-bordered shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Age</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
      students.map((student,index)=>(
        <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{student.name}</td>
      <td>{student.email}</td>
      <td>{student.age}</td>
    </tr>
      ))
    }
    
    
  </tbody>
</table>
        </div>
    </div>
  )
}
