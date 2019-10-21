import React from 'react';
import Layout from './Components/Layout/Layout'
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder'

function App() {
  return (
    <div>
      <Layout>
        <p><BurgerBuilder /></p>
      </Layout>
    </div>
  );
}

export default App;
