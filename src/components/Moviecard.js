import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToWatchList, removeFromWatchList } from "../store/slices/counter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { useState } from "react";

const Moviecard = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isFavorite, setIsFavorite] = useState(false);

    const handleToggle = () => {
        if (isFavorite) {
            dispatch(removeFromWatchList({ id: props.item.id }));
        } else {
            dispatch(addToWatchList(props.item));
        }
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="col">
            <div className="card h-100">
                <img src={`https://image.tmdb.org/t/p/w500${props.item.poster_path}`} className="card-img-top" alt={props.item.title} />
                <div className="card-body">
                    <h5 className="card-title">{props.item.title}</h5>
                    <p className="card-text">{props.item.overview}</p>
                    <p className="card-text"><small className="text-muted">Release Date: {props.item.release_date}</small></p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-dark mr-2" onClick={() => navigate(`/showdetails/${props.item.id}`)}>View Details</button>
                    <FontAwesomeIcon
                        icon={isFavorite ? fasHeart : farHeart}
                        style={{ color: isFavorite ? '#008000' : '#757575', cursor: 'pointer', fontSize: '24px' }}
                        onClick={handleToggle}
                    />
                </div>
            </div>
        </div>
    );
};

export default Moviecard;
