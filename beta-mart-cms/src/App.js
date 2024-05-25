import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddProductPage from './pages/AddProductPage';
import EditProductPage from './pages/EditProductPage';
import UserManagementPage from './pages/UserManagementPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/add-product" component={AddProductPage} />
        <Route path="/edit-product/:id" component={EditProductPage} />
        <Route path="/manage-users" component={UserManagementPage} />
      </Switch>
    </Router>
  );
}

export default App;
