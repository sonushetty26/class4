import React from 'react'
import Ex1 from './component/Ex1';
import Ex2 from './component/Ex2';
import Ex3 from './component/Ex3';
import Ex4 from './component/Ex4';
import Ex5 from './component/Ex5';
import Ex6 from './component/Ex6';
import Ex7 from './component/Ex7';
import Ex8 from './component/Ex8';
import Ex9 from './component/Ex9';
import Ex11 from './component/Ex11';

/*react hooks => method =>dedicated to a functional component , function,const arrow,const local */

function App(props) {
  return(
    <div className="container">
      <div className="col-md-12 text-center">
        <h3 className="display-3 text-success">React Hooks</h3>
      </div>
      <Ex9/>
    </div>
  )
}

export default App