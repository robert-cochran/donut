import React from 'react';
import './App.css';
import Dact from './dact.svg';

const App = () => {
return(
        <div className="App">
            <Dact className="Applogo"/>
            <div className="Apptext">
                <br></br>    
                <h4>It's Up and Running !!!</h4>
                <h6>
                    <p>
                    Edit App.js to get started with frontend!!
                    </p>
                    <p>
                    Server Running at 127.0.0.1:8000
                    </p>
                    <p>
                        Run dact-watch in BASE_DIR to start dev mode
                    </p>
                </h6>
            </div>
        </div>
        );
}
export default App;