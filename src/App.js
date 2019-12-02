import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profille/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
    <div className={'app-wrapper'}>
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path='/profile' render={ () => <Profile PostData={props.state.ProfilePage.PostData} 
                                                       addPost={props.addPost} /> } />
        <Route path='/dialogs' render={ () => <Dialogs DialogsData={props.state.dialogsPage.DialogsData}
                                                       MessagesData={props.state.dialogsPage.MessagesData} /> } />
        {/* <Route path='/profile' component={Profile} /> */}
        {/* <Route path='/dialogs' component={Dialogs} /> */}
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
