import { Link } from 'react-router-dom';
// import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';

export function AppHeader() {
  // const history = useHistory();
  // const params = useParams()

  return (
    <header className='app-header full'>
      <Link to='/' title='HomePage' className='logo'>
        SpaceX
      </Link>
    </header>
  );
}
