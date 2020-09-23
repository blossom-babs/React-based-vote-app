import React from 'react';

export default function HousemateRank({ housemate }) {
  return (
    <div className='housemate-ranking'>
      <div className='row'>
        <div className='col-3 my-auto'>
          <img src={housemate.picture} alt='' />
        </div>
        <div className='col-6 my-auto'>
          <h5 className='housemate-ranking__name'>{housemate.name}</h5>
        </div>
        <div className='col-3 d-flex justify-content-end'>
          <div className='candidate-position d-flex align-items-center justify-content-center'>
            <p className='candidate-position__number text-bold'>
              {housemate.votes}{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
