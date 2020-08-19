const initialState = {
    employee: null,
    employees: [],
    totalPages: 10,
    currentPage: 1
}

function employeeReducer(state = initialState, {type,payload}) {
    switch (type) {
        case 'GET_EMPLOYEES':
            return {...state, employees: payload.employees, totalPages: payload.totalPages, currentPage: payload.currentPage }
        case 'SET_EMPLOYEE':
            return {...state, employee: payload}
        default:
            return state
    }
}

export default employeeReducer