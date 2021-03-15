import {useEffect, useState} from 'react';
import requests from "../../utils/requests/requests";
import axios from "../../utils/axios/axios";
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import './banner.css'

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

function Banner() {
    const [movie, setMovie] = useState();
    const classes = useStyles();

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(requests.trending);
            const result = request.data.results;
            const randNumber = Math.floor(Math.random() * result.length - 1);

            setMovie(result[randNumber]);
        }

        fetchData();
    }, []);

    return (
        <header className='banner' style={
            {
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            }
        }>
            <div className="banner__content">
                <h1 className="banner__title">{movie?.title}</h1>
                <div className="banner__btn">
                    <Button
                        variant={"contained"}
                        className={classes.button}
                        startIcon={<PlayArrowIcon/>}>
                        Play
                    </Button>
                    <Button
                        variant={"contained"}
                        className={classes.button}
                        startIcon={<InfoOutlinedIcon/>}>
                        My List
                    </Button>
                </div>

                <p className="banner__description">
                    {movie?.overview}
                </p>
            </div>

            <div className="banner__fadeBottom"/>
        </header>
    )
}

export default Banner