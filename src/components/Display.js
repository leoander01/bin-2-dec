import React from 'react';

const Display = ({ inputBin, decNum }) => {
  return (
    <div className="display">
      { !inputBin.binary ? (
        <p className="info">
          <span role="img" aria-label="Shrug">
            🤷
          </span>
          Esperando por um número binário válido...
        </p>
      ) : (
        <p>{ decNum }</p>
      )}
    </div>
  )
}

export default Display;
