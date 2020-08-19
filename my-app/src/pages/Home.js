import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import {getEmployees} from '../store/actions/employeeAction'

export default function Home() {
    const employees = useSelector((state)=> state.employeeReducer.employees)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getEmployees())
    }, [employees])

    return (
        <div>
            {JSON.stringify(employees)}
        </div>
    )
}
