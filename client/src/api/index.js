import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertUser = payload => api.post('/user', payload)
export const updateUserById = (id, payload) => api.put(`/user/${id}`, payload)
export const deleteUserById = id => api.delete(`/user/${id}`)
export const getUserById = id => api.get(`/user/${id}`)
export const SignInUser = payload => api.post('/user/signin', payload)
export const SignOutUser = payload => api.post('/user/signout', payload)

export const insertQuiz = payload => api.post('/quiz', payload)
export const updateQuizById = (id, payload) => api.put(`/quiz/${id}`, payload) 
export const deleteQuizById = id => api.delete(`/quiz/${id}`)
export const getQuizById = id => api.get(`/quiz/${id}`)
export const getAllQuiz = () => api.get('/quiz')

export const insertQuestion = payload => api.post('/question', payload)
export const updateQuestionById = (id, payload) => api.put(`/question/${id}`, payload) 
export const deleteQuestionById = id => api.delete(`/question/${id}`)
export const getQuestionById = id => api.get(`/question/${id}`)
export const getAllQuestion = () => api.get('/question') 

export const insertUserResponse = payload => api.post('/userResponse', payload)
export const updateUserResponseById = (id, payload) => api.put(`/userResponse/${id}`, payload) 
export const deleteUserResponseById = id => api.delete(`/userResponse/${id}`)
export const getUserResponseById = id => api.get(`/userResponse/${id}`)
export const getAllUserResponse = () => api.get('/userResponse') 

export const insertScore = payload => api.post('/score', payload)
export const updateScoreById = (id, payload) => api.put(`/score/${id}`, payload) 
export const deleteScoreById = id => api.delete(`/score/${id}`)
export const getScoreById = id => api.get(`/score/${id}`)
export const getAllScore = () => api.get('/score') 

const apis = {
    insertUser,
    insertQuiz,
    insertQuestion,
    insertUserResponse,
    insertScore,
    updateUserById,
    updateQuizById,
    updateQuestionById,
    updateUserResponseById,
    updateScoreById,
    deleteUserById,
    deleteQuizById,
    deleteQuestionById,
    deleteUserResponseById,
    deleteScoreById,
    getUserById,
    getQuizById,
    getQuestionById,
    getUserResponseById,
    getScoreById,
    getAllQuiz,
    getAllQuestion,
    getAllUserResponse,
    getAllScore,
    SignInUser,
    SignOutUser
}

export default apis