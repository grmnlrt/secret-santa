import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import '../stylesheets/application.scss';

import Typed from 'typed.js';

const getSecretName = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('secretName');
}

const decodeName = () => {
  const name = getSecretName();
  if (name === null) {
    return null;
  }
  return atob(name);
}

const displayName = () => {
  const name = decodeName();
  console.log(name)
  new Typed('#decrypted-string', {
    strings: [name],
    typeSpeed: 60,
    startDelay: 2000,
    showCursor: false
  });
}

displayName();
