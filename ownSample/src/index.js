import _ from 'lodash';
import {add} from './helpers/calculator';

function component() {
  var element = document.createElement('div');
  var total = add(1,2);

  element.setAttribute("style", "background-color:#151515;color:#fff;font-size:2em;");
  element.innerHTML = _.join(['Hello', 'webpack', total], ' ');

  return element;
}

document.body.appendChild(component());