import React from 'react'
import { useDispatch } from 'react-redux'
import {getEmployees} from '../store/actions/employeeAction'

export default function Pagination({ currentPage, totalPages }) {
    const dispatch = useDispatch()
    const pageLinks = [];

    for (let i = 1; i <= 10; i++) {
        pageLinks.push(
            <li class={i == currentPage ? "page-item active" : "page-item"}>
                <a class="page-link" onClick={()=>{
                    dispatch(getEmployees(i))
                }}>{i}</a>
            </li>
        )
    }

    return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <nav class="text-xs-center">
                <ul class="pagination">
                    <li class={currentPage == 1 ? "page-item disabled" : "page-item"}>
                        <a class="page-link" onClick={()=>{dispatch(getEmployees(Number(currentPage)-1))}} aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    {pageLinks}
                    <li class={currentPage == totalPages ? "page-item disabled" : "page-item"}>
                        <a class="page-link" onClick={()=>{dispatch(getEmployees(Number(currentPage)+1))}} aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
