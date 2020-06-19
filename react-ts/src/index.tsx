import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button'
import Atton from './atton'

function onClick(e:React.MouseEvent) {
  console.log('fn')
  console.log(e);
  
}

ReactDOM.render(
  <div>
    <Button size='small'></Button>
    <Button onClick={onClick}>
      <span>aaaa</span>
      <span>bbbb</span>
    </Button>
    <Button size='big'></Button>
    <Atton></Atton>
  </div>,
  document.getElementById('root')
);
