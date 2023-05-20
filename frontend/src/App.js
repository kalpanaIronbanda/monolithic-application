import React from 'react';
import './App.css'; // Import your custom CSS file

const App = () => {
  return (
    <div className="app">
      <div className="column column1">
        <h2 className="header">Backend Application 1</h2>
        <h3>student list</h3>
        <iframe src="http://backend-api1-ip/" title="Backend Application 1" className="iframe iframe1" />
      </div>

      <div className="column column2">
        <h2 className="header">Backend Application 2</h2>
        <h3> Employee list </h3>
        <iframe src="http://backend-api2-ip/" title="Backend Application 2" className="iframe iframe2" />
      </div>
    </div>
  );
};

export default App;