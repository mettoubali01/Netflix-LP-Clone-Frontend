import {useState, useEffect} from 'react'
import axios from "../../utils/axios/axios";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer'
import './row.css'

const img_base_url = 'https://image.tmdb.org/t/p/original';

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [clickedImg, setClickedImg] = useState(false);
    const [idClickedImg, setIdClickedImg] = useState();
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            console.log("Yassine")
            console.log(request.data.results)
            setMovies(request.data.results);

            return request;
        }

        fetchData();
    }, [fetchUrl]);

    function handleClickedImg(event, title) {

        if (title) {
            movieTrailer(title, {id: true, multi: true})
                .then(
                    response => {
                        console.log(response[0]);
                        if (response.length > 0)
                            setIdClickedImg(response[0]);
                    })
                .catch(
                    err => console.log(err)
                )
            setClickedImg(!clickedImg);
        }

    }

    console.log(movies);
    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map((movie, index) => {

                    return (<img onClick={() => {
                        handleClickedImg(this, movie?.title);
                    }} key={index}
                                 className="row__poster"
                                 alt={movie.title}
                                 src={`${img_base_url}${!isLargeRow ? movie.poster_path : movie.backdrop_path}`}/>)
                })}
            </div>
            {(clickedImg) && <YouTube videoId={idClickedImg} opts={opts}/>}

        </div>

    )
}

export default Row