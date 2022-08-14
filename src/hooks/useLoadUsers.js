import React, { useEffect, useState } from 'react'

/*
function useMyHook(initState1, initState2, fun){
    const [state1, setState1] = useState(initState1);
    const [state2, setState2] = useState(initState2);
    // code
    return {state1, state2}
}

вызов в компоненте const {state1, state2} = useMyHook(props.x, props.y)
*/

function useLoadUsers(loadFun) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect( () => {
    setIsFetching(true);
    loadFun({})
    .then( (data) => setData(data.results))
    .catch( (error) => setIsError(true))
    .finally(() => { setIsFetching(false)})
  }, []);
  return {data, isFetching, isError};
}

export default useLoadUsers;

