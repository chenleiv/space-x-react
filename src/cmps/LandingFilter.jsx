import React from 'react';
import { useForm } from '../hooks/useForm';

export const LandingFilter = ({ onChangeFilter }) => {
  const [filterBy, handleChange] = useForm(
    {
      status: '',
    },
    onChangeFilter
  );

  const { status } = filterBy;
  return (
    <form>
      <section className='filter'>
        <select onChange={handleChange} value={status} name='status' id='status'>
          <option value='' disabled>
            Filter landing by Status
          </option>
          <option value='all'>All</option>
          <option value={true}>Success Landing</option>
          <option value={false}>Failed Landing</option>
        </select>
      </section>
    </form>
  );
};
