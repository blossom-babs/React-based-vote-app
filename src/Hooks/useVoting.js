import { useEffect, useState } from 'react';

export const useErrorState = (value) => {
  const [errorState, setErrorState] = useState(value);

  return [errorState, setErrorState];
};

export const usePercentageOfVoteRemaining = (vote, maximumVotes) => {
  const percentage = (vote / maximumVotes) * 100;
  return Math.floor(percentage);
};

export const useUpdateHousemates = (staticHousemates) => {
  const [housemates, updateHousemates] = useState(staticHousemates);

  return [housemates, updateHousemates];
};

export const useSetVote = (maximumVotes) => {
  const [vote, setVote] = useState(maximumVotes);

  return [vote, setVote];
};

function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;

  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, []);

  return [value, setValue];
};
