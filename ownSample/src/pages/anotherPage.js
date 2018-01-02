import _ from 'lodash';
import Greetings from './Robot/Robot';
import styles from './anotherpage.css';

console.log(
  _.join(['Another', 'module', 'loaded!'], ' ')
);

document.write(Greetings('Affirmative', 'Dave'));

let element = `
    <div class="${styles.element}">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur laudantium recusandae itaque libero velit minus ex reiciendis veniam. Eligendi modi sint delectus beatae nemo provident ratione maiores, voluptatibus a tempore!</p>
    </div>
`

document.write(element);