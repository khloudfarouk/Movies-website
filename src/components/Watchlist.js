import { useDispatch, useSelector } from 'react-redux';
import { removeFromWatchList } from '../store/slices/counter';

const WatchList = () => {
    const watchList = useSelector(state => state.watchList.favorites);
    const dispatch = useDispatch();

    const handleRemoveFromWatchList = (movieId) => {
        dispatch(removeFromWatchList({ id: movieId }));
    };

    return (
        <div style={{ margin: '20px' }}>
            <br/><br/><br/>
            <h1>WatchList</h1>
            <hr/>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {watchList.map(movie => (
                    <div key={movie.id} className="col">
                        <div className="card h-100">
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt={movie.title} />
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">Release Date: {movie.release_date}</p>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-dark" onClick={() => handleRemoveFromWatchList(movie.id)}>Remove from WatchList</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WatchList;
