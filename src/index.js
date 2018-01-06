import _ from 'lodash';
import './style.css';
import Icon from 'https://cdn.hyperdev.com/paste-me.svg?1477325869954';

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  
  var myIcon = new Image();
  myIcon.src = Icon;
  
  element.appendChild(myIcon);
  
  return element;
}

document.body.appendChild(component());