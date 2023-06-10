import React from 'react';
import ReactDOM from 'react-dom';

import { Color, Image, Margin, Select } from '@xquisit/react';

const App: React.FC = () => {
  return (
    <div>
      <Image
        src='https://images.pexels.com/photos/2869565/pexels-photo-2869565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        width='xxxl'
        height='xxxl'
      />
      <Margin space='xxxs'>
        <Color hexCode='#123321' width='xxxl' height='xxxl' />
      </Margin>
      <Select />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
