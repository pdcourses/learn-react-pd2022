import {useState, useEffect} from 'react';
import {loadRandomUsers} from '../settings/api'

function useLoadRamdomUsers(props) {
    const {loadRandomUsers} = props; 
    const [data, setData] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [isError, setIsError] = useState(null);
    try{
        setData(loadRandomUsers);
    } catch(error){
        setIsError(true);
    } finally{
        setIsFetching(false);
    }
    
    return {data, isFetching, isError};
 }
 