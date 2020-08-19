import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getEmployees} from '../store/actions/employeeAction'

import Table from '../components/Table'
import Pagination from '../components/Pagination'

export default function Home() {
    const employees = useSelector((state)=> state.employeeReducer.employees)
    const currentPage = useSelector((state)=> state.employeeReducer.currentPage)
    const totalPages = useSelector((state)=> state.employeeReducer.totalPages)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getEmployees())
    }, [])

    return (
        <div>
            <h2 style={{textAlign:"center", margin: "8px 0px"}}>Employee List</h2>
            {employees.length == 0 ? <p style={{textAlign:"center"}}>Loading...</p> : 
                <div>
                    <Table employees={employees} />
                    <Pagination currentPage={currentPage} totalPages={totalPages} />
                </div>  
            }
        </div>
    )
}
