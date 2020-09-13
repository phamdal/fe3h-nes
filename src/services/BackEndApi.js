import axios from 'axios'; 

const apiClient = axios.create({
    baseURL: 'https://protected-springs-40166.herokuapp.com/', 
    withCredentials: false, 
    headers: {
        Accept: 'application/json', 
        'Content-Type': 'application/json'
    }
}); 

export default {
    getCharacterInfo(name) {
        return apiClient.get('/' + name); 
    }, 
    getLectureQuestions(query) {
        return apiClient.post('/lecture', {searchQuery: query}); 
    }, 
    getConfessionalQuestions(query) {
        return apiClient.post('/adviceBox', {searchQuery: query}); 
    }, 
    getLostItems(query) {
        return apiClient.post('/lostItems', {searchQuery: query}); 
    }
}