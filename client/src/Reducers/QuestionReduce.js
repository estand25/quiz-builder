const initialState = {
    name: '',
    qOption: '',
    qOptions: [],
    addStatus: false,
    quizList: [],
    quizSelection: '',
    correctAnswer: '',
    point: 0,
    order: 0,
    status: '',
    questions: 0    
}

function questionReduce (state, action) {
    switch (action.type) {
        case 'setName': 
            return { ...state, name: action.payload}
        case 'setQOption':
            return { ...state, qOption: action.payload}
        case 'setQoptions':
            return { ...state, qOptions: action.payload}
        case 'setAddStatus':
            return { ...state, addStatus: action.payload}
        case 'setQuizList':
            return { ...state, quizList: action.payload}
        case 'setQuizSelection':
            return { ...state, quizSelection: action.payload}
        case 'setCorrectAnswer':
            return { ...state, correctAnswer: action.payload}
        case 'setPoint':
            return { ...state, point: action.payload}
        case 'setOrder':
            return { ...state, order: action.payload}
        case 'setStatus':
            return { ...state, status: action.payload}
        case 'setQuestionCount':
            return { ...state, questionCount: action.payload}
        default:
            return state
    }
}

export default {
    initialState,
    questionReduce
}