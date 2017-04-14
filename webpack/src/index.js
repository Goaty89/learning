import './alert.js';
import greetings from './robot';
import styles from './index.css'

(function() {
   'use strict';
   document.getElementById('ending').innerHTML = 'Good Bye'
    document.write(greetings('hi', 'Charles'));

    let element = `
      <div class="${styles.element}">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur laudantium recusandae itaque libero velit minus ex reiciendis veniam. Eligendi modi sint delectus beatae nemo provident ratione maiores, voluptatibus a tempore!</p>
      </div>
    `;

    document.write(element);
})();