import React, { useEffect, useState } from "react";

export default function Housemate({
  housemate,
  onVote,
  downVote,
  castVote,
  housemates,
  checkManualVoteError,
}) {
  const [votes, setVotes] = useState(housemate.votes);
  const [displayedVotes, setDisplayedVotes] = useState(housemate.votes);
  const [excessVoteError, setExcessVoteError] = useState(false);

  useEffect(() => {
    if (votes > 0) {
      const nn = parseInt(votes);
      castVote(nn);
    }
  }, [votes]);

  useEffect(() => {
    setVotes(housemate.votes);
    setDisplayedVotes(housemate.votes);
  }, [housemates]);

  return (
    <div className="housemate">
      <div className="row">
        <div className="col-3">
          <img src={housemate.picture} alt={housemate.name} />
        </div>
        <div className="col-9">
          <h5 className="housemate__name">{housemate.name}</h5>
          <div className="housemate__vote">
            <button
              className="housemate__vote__control"
              onClick={() => downVote()}
            >
              -
            </button>
            <div className="housemate__vote__divider" />
            <input
              type="text"
              className="housemate__vote__count text-bold"
              value={displayedVotes}
              onChange={(e) => {
                if (checkManualVoteError(e.target.value)) {
                  setExcessVoteError(false);
                  setVotes(e.target.value);
                  setDisplayedVotes(e.target.value);
                } else {
                  setDisplayedVotes(e.target.value);
                  setExcessVoteError(true);
                }
              }}
            />
            <div className="housemate__vote__divider" />
            <button
              className="housemate__vote__control"
              onClick={() => onVote()}
            >
              +
            </button>
          </div>
          {excessVoteError && (
            <p className="mt-1 text-red text-small">*Excess vote</p>
          )}
        </div>
      </div>
    </div>
  );
}
