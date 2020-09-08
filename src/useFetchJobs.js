import { useReducer, useEffect } from 'react';
import axios from 'axios';

const ACTIONS = {
	MAKE_REQUEST:'make-request',
	GET_DATA:'get-data',
	ERROR:'error',
  HAS_NEXT_PAGE:'has-nxt-page'
}
const {MAKE_REQUEST, GET_DATA, ERROR, HAS_NEXT_PAGE} = ACTIONS;

function useFetchJobs(params, page) {

  const [state, dispatch] = useReducer(reducer, {loading:true, jobs:[]});

  function reducer(state, action) {
    switch(action.type) {
    	case MAKE_REQUEST:
    		return { loading:true, jobs:[]}
    	case GET_DATA:
    		return { ...state, loading:false, jobs:action.payload.jobs}
    	case HAS_NEXT_PAGE:
        return {...state, hasNextPage:action.payload.hasNextPage}
      case ERROR:
    		return { ...state, loading:false, error:action.payload.error, jobs:[]}
    	default:
    		return state;
    }
  }

  const API_URL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json';
  useEffect(() => {
  	const cancelToken1 = axios.CancelToken.source();
  	dispatch({type:MAKE_REQUEST})
    axios.get(API_URL, {
    	cancelToken: cancelToken1.token,
    	params: { markdown: true, page:page, ...params }
    })
    .then(res => {
    	dispatch({type:GET_DATA, payload:{jobs:res.data}})
    })
    .catch(e => {
    	if(axios.isCancel(e)) return;
    	dispatch({type:ERROR, payload: { error: e }})
    })

    const cancelToken2 = axios.CancelToken.source();
    axios.get(API_URL, {
      cancelToken: cancelToken2.token,
      params: { markdown: true, page:page + 1, ...params }
    })
    .then(res => {
      dispatch({ type:HAS_NEXT_PAGE, payload:{ hasNextPage:res.data.length !== 0 } })
    })
    .catch(e => {
      if(axios.isCancel(e)) return;
      dispatch({type:ERROR, payload: { error: e }})
    })

    return () => {
    	cancelToken1.cancel();
      cancelToken2.cancel();
    }
  }, [params, page])

	return state;


}

export default useFetchJobs;