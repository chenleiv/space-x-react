import axios from 'axios';
import { storageService } from './storageService';

export const landingService = {
  getLanding,
  getById,
};

const STORAGE_KEY = 'landings';

async function getLanding(filterBy = null) {
  console.log('hi');
  try {
    let data = storageService.load(STORAGE_KEY);
    if (!data || !data.length) {
      const { data } = await axios.get(`https://api.spacexdata.com/v4/launches`);
      // gLandings = res.data;
      console.log('api');
      storageService.store(STORAGE_KEY, data);
      return data;
    }
    if (filterBy && filterBy.status) {
      console.log('filter from service');
      data = filter(data, filterBy);
      return data;
    }
    return data;
  } catch (err) {
    console.log(err);
  }
}

function filter(items, filterBy) {
  console.log('filterBy.status', filterBy.status);
  if (filterBy.status === 'all') {
    return items;
  } else if (filterBy.status === 'true') {
    console.log(`true`, filterBy.status);
    return items.filter((item) => item.success === true);
  } else if (filterBy.status === 'false') {
    console.log(`false`, filterBy.status);
    return items.filter((item) => item.success === false);
  }
}

function getById(id) {
  return new Promise((resolve, reject) => {
    let landings = storageService.load(STORAGE_KEY);
    const loading = landings.find((loading) => loading.id === id);
    loading ? resolve(loading) : reject(`Contact id ${id} not found!`);
  });
}
