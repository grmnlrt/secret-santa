import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import '../stylesheets/application.scss';

import Typed from 'typed.js';

const getSecret = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('secret');
}

const decodeString = () => {
  const name = getSecret();
  if (name === null) {
    return null;
  }
  return atob(name);
}

const displayString = () => {
  const name = decodeString();
  console.log(name)
  new Typed('#decrypted-string', {
    strings: [name],
    typeSpeed: 60,
    startDelay: 0,
    showCursor: false
  });
}

displayString();
