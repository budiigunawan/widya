import React from 'react'
import { useDispatch } from 'react-redux'
import {getEmployees} from '../store/actions/employeeAction'

export default function Pagination({ currentPage, totalPages }) {
    const dispatch = useDispatch()
    const pageLinks = [];

    for (let i = 1; i <= 10; i++) {
        pageLinks.push(
            <li key={i} className={i === Number(currentPage) ? "page-item active" : "page-item"}>
                <a className="page-link" onClick={()=>{
                    dispatch(getEmployees(i))
                }}>{i}</a>
            </li>
        )
    }

    return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <nav className="text-xs-center">
                <ul className="pagination">
                    <li className={Number(currentPage) === 1 ? "page-item disabled" : "page-item"}>
                        <a className="page-link" onClick={()=>{dispatch(getEmployees(Number(currentPage)-1))}} aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    {pageLinks}
                    <li className={Number(currentPage) == totalPages ? "page-item disabled" : "page-item"}>
                        <a className="page-link" onClick={()=>{dispatch(getEmployees(Number(currentPage)+1))}} aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
