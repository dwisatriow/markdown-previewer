import React from 'react';
import './Preview.scss';

function Preview(props) {
  return (
    <div id="parsedHTML">
      {props.parsedHTML}
    </div>
  );
}

export default Preview;