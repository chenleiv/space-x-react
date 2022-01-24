import { Link } from 'react-router-dom';

export function LandingPreview({ landing }) {
  return (
    <Link to={`/landing/${landing.id}`}>
      <div className='landing-preview'>
        <img src={landing.links.patch.small} alt='' />
        <h2>{landing.name.length > 11 ? landing.name.slice(0, 11) : landing.name}</h2>
      </div>
    </Link>
  );
}
