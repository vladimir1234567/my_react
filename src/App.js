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
                                                       addPost={props.addPost} 
                                                       newPostData={props.state.ProfilePage.newPostData} 
                                                       updatePostData={props.updatePostData} /> } />
        <Route path='/dialogs' render={ () => <Dialogs DialogsData={props.state.dialogsPage.DialogsData}
                                                       MessagesData={props.state.dialogsPage.MessagesData} 
                                                       addMessage={props.addMessage} 
                                                       newmes={props.state.dialogsPage.newmes} 
                                                       updateMessage={props.updateMessage} /> } />
        {/* <Route path='/profile' component={Profile} /> */}
        {/* <Route path='/dialogs' component={Dialogs} /> */}
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
