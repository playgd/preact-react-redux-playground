'use strict';

import preact, { h } from 'preact';

preact.render(
  <div>
    <button onClick={() => alert('hi!')}>Click me</button>
  </div>,
  document.querySelector('[data-js="main"]')
);
