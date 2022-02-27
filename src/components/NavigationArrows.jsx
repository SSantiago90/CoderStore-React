import React from "react";
import { useHistory } from "react-router-dom";

import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavigationArrows({ goNext, from }) {
  const navig = useHistory();

  return (
    <div>
      <div className="absolute left-0 top-1/2">
        <button
          onClick={() => goNext(-1)}
          disabled={from === 1}
          className="w-2/4 text-grey-400"
        >
          <FontAwesomeIcon icon={faArrowCircleLeft} />
        </button>
      </div>
      <div className="absolute right-0 top-1/2">
        <button onClick={() => goNext(1)} className="w-2/4 text-grey-400">
          <FontAwesomeIcon icon={faArrowCircleRight} />
        </button>
      </div>
    </div>
  );
}
