import React, {useState} from "react";
import {useDispatch } from "react-redux";
import TuitStats from "./TuitStats";
// import {deleteTuit} from "./tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";


const TuitItem = ({ post }
) => {

    // const tuits = useSelector(state => state.tuits);
    const [tuit] = useState({do: ''});

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
      }
      

 return(
    <li className="list-group-item">
        <div className="row">
            <div className="col-10">
            <i className="bi bi-x-lg float-end"
                onClick={() => deleteTuitHandler(tuit._id)}></i>
                <div> 
                    <b>{post.userName} </b> 
                    {post.handle} . {post.time}
                </div>
                <div>
                    {post.tuit}
                </div>
            </div>
            <div className="col-2">
                <img width={70} className="float-end rounded-3" src={post.image} alt=''/>
            </div>
            <TuitStats key={post._id} post={post}/> 
        </div>
    </li>
 );
};
export default TuitItem;