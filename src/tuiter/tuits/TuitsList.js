import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TuitItem from "./TuitItem";
import {findTuitsThunk}
  from "../../services/tuits-thunks";

const TuitsList = () => {
  // const {tuits, loading} = useSelector(state => state.tuitsData)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk())
  }, [])

  const postsArray = useSelector(state => state.tuits)
  
  return(
   <ul className="list-group">
    {
       loading &&
       <li className="list-group-item">
         Loading...
       </li>
     }
     {
       postsArray.map(post =>
         <TuitItem key={post._id} post={post}/> )
     }
   </ul>
 );
};

export default TuitsList;