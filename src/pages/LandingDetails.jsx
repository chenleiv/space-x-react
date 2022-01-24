import { useEffect, useState } from 'react';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getLandingById } from '../store/actions/itemActions';

export const LandingDetails = (props) => {
  const [landing, setLanding] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    loadLanding();
  }, [props.match.params.id]);

  const loadLanding = async () => {
    const landing = await dispatch(getLandingById(props.match.params.id));
    console.log(props.match.params.id);
    setLanding(landing);
    console.log(landing);
  };

  if (!landing)
    return (
      <div className='loading'>
        <div className='lds-dual-ring'></div>
      </div>
    );
  return (
    <div className='landing-container'>
      <Link to={'/'}>
        <MdOutlineKeyboardBackspace className='back' />
      </Link>
      <div className='landing-details'>
        <div className='prev'>
          <h1>{landing.name}</h1>
          <h3> {landing.date_utc.slice(0, 10)}</h3>
        </div>
        <div className='Failures'>
          {!landing.failures.length > 0 ? (
            <h3>No failures</h3>
          ) : (
            <h3>Failures: {landing.failures[0].time}</h3>
          )}
          {!landing.failures.length > 0 ? (
            <h3></h3>
          ) : (
            <h3>Failures reason: {landing.failures[0].reason}</h3>
          )}
        </div>
        <div className='Details'>
          <h4>{landing.details}</h4>
        </div>
        <div className='item-video'>
          <iframe
            // width='500'
            // height='280'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            src={`https://www.youtube.com/embed/` + landing.links.youtube_id}></iframe>
        </div>
        <div className='link'>
          <a href={landing.links.wikipedia}>
            <span> Wikipedia page</span>
          </a>
        </div>
      </div>
    </div>
  );
};
