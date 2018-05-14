import axios from 'axios';
import {FETCH_SUCCESS} from './types';
export function fetchData() {
    return dispatch => {
        axios.get('http://5af4e3a204604e0014ea7392.mockapi.io/data')
            .then(response => {
                dispatch({type: FETCH_SUCCESS, payload: response.data});
            })
            .catch(() => {
                // alert('error al cargar datos'); //TODO: Majenar error al traer data
            });
    };
}
