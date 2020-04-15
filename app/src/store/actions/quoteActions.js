import axios from 'axios';
// thunks


// redux is synchronous
// we need to perform an async operation
export const fetchQuote = () => {
    return dispatch => {
        dispatch({type: "FETCH_QUOTE_START"});
        axios
            .get('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
            .then(res => {
                console.log(res)
                dispatch({type: "FETCH_QUOTE_SUCCESS", payload: res.data})
            })
            .catch(err => console.log(err.response));
    };
};

