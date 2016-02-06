'use strict';

import preact, { h } from 'preact';

preact.render(
  <div>
    <button>Click me</button>
  </div>,
  document.querySelector('[data-js="main"]')
);
