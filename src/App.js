import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profille/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import Musik from './Components/Musik/musik';


const App = (props) => {
  return (
    <BrowserRouter>
    <div className={'app-wrapper'}>
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path='/profile' render={ () => <Profile PostData={props.state.ProfilePage.PostData} 
                                                       dispatch={props.dispatch} 
                                                       newPostData={props.state.ProfilePage.newPostData} /> } />
        <Route path='/dialogs' render={ () => <Dialogs DialogsData={props.state.dialogsPage.DialogsData}
                                                       MessagesData={props.state.dialogsPage.MessagesData} 
                                                       dispatch={props.dispatch} 
                                                       newmes={props.state.dialogsPage.newmes}  /> } />

        <Route path='/musik' render={ () => <Musik MusikList={props.state.MusikPage.MusikList}
                                                   dispatch={props.dispatch} 
                                                   newCompName={props.state.MusikPage.newCompName} /> } />
        {/* <Route path='/profile' component={Profile} /> */}
        {/* <Route path='/dialogs' component={Dialogs} /> */}
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
