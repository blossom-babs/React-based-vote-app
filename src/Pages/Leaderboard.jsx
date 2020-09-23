import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import HousemateRank from '../components/HousemateRank';

export default function Leaderboard() {
  const history = useHistory();

  // Check if localstorage is empty
  if (localStorage.getItem('housemate') === null) {
    console.log('Empty');
  } else {
    var newHousemateCopy = JSON.parse(localStorage.getItem('housemate'));

    var getSortedHousemate = newHousemateCopy.sort(
      (firstVoteCount, secondVoteCount) => {
        return firstVoteCount.votes < secondVoteCount.votes
          ? 1
          : firstVoteCount.votes > secondVoteCount.votes
          ? -1
          : 0;
      }
    );

    var housemateRanks = getSortedHousemate.map((hm) => (
      <div key={hm.name} className='col-md-6'>
        <HousemateRank housemate={hm} />
      </div>
    ));
  }

  return (
    <>
      {localStorage.getItem('housemate') === null ? (
        <Redirect to='/' />
      ) : (
        <div className='leaderboard'>
          <div className='header text-center mb-3'>
            <h1 className='header-title'>Leaderboard</h1>
          </div>

          <div className='row'>{housemateRanks}</div>

          <div className='mt-5 text-center text-bold'>
            <p className='eviction-notice'>
              {getSortedHousemate[0].name} won the vote
            </p>
          </div>

          <div className='text-center mt-5'>
            <button
              onClick={() => {
                localStorage.clear('housemate');
                history.push('/');
              }}
              className='text-bold'
            >
              Back To Vote
            </button>
          </div>
        </div>
      )}
    </>
  );
}
