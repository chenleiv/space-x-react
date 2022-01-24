import { useCallback, useEffect, useState } from 'react';
import { LandingList } from '../cmps/LandingList';
import { LandingFilter } from '../cmps/LandingFilter';
import { useDispatch, useSelector } from 'react-redux';
import { loadLanding, setFilterBy } from '../store/actions/itemActions';

export const HomePage = () => {
  const { landings } = useSelector((state) => state.landingModule);
  const dispatch = useDispatch();

  // const [currentPage, setCurrentPage] = useState(1);
  // const [currentPerPage, setCurrentPerPage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      dispatch(loadLanding());
    }, 2000);
    // const res = dispatch(loadLanding());
    // console.log(res);
  }, []);

  // const indexLastLand = currPage * postsPerPage;
  // const indexFirstLand = indexLastLand - postsPerPage;
  // const currentLanding = landings.slice(indexFirstLand, indexLastLand);

  const onChangeFilter = useCallback((filterBy) => {
    dispatch(setFilterBy(filterBy));
    console.log(`filterBy`, filterBy);
    dispatch(loadLanding());
  }, []);

  if (!landings)
    return (
      <div className='loading'>
        <img src={require('../assets/img/giphy.gif')} />
      </div>
    );
  return (
    <div>
      <LandingFilter onChangeFilter={onChangeFilter} />
      {/* <LandingList landings={currentLanding} /> */}
      <LandingList landings={landings.length > 20 ? landings.splice(0, 20) : landings} />
    </div>
  );
};
