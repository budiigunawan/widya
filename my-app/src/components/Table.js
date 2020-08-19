import React from 'react'

export default function Table({employees}) {
    return (
        <table className="table">
            <thead className="thead-light">
                <tr>
                <th scope="col">NIK</th>
                <th scope="col">Nama</th>
                <th scope="col">Alamat</th>
                <th scope="col">Telepon</th>
                <th scope="col">Email</th>
                <th scope="col">Unit</th>
                <th scope="col">Status</th>
                <th scope="col">Role</th>
                </tr>
            </thead>
            <tbody>     
                {employees.map((employee)=>{
                    return(
                        <tr key={employee.nik}>
                            <td>{employee.nik}</td>
                            <td>{employee.nama}</td>
                            <td>{employee.alamat}</td>
                            <td>{employee.telepon}</td>
                            <td>{employee.email}</td>
                            <td>{employee.unit}</td>
                            <td>{employee.status}</td>
                            <td>{employee.role}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
