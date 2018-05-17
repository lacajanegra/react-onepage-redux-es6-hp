import axios from 'axios';
import {FETCH_SUCCESS} from './types';

export function fetchData(id) {
    return dispatch => {
        axios.get(`https://hola.com/${id}.json`)
            .then(response => {
                dispatch({type: FETCH_SUCCESS, payload: response.data});
            })
            .catch(() => {
                axios.get(`http://5af4e3a204604e0014ea7392.mockapi.io/${id}`)
                    .then(response => {
                        dispatch({type: FETCH_SUCCESS, payload: response.data});
                    })
                    .catch(() => {
                        // alert('error al cargar datos'); //TODO: Manejar error al traer data
                    });
            });
    };
}
