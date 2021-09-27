import React from 'react'
import './App.css'
import DayList from './component/DayList';
import Day from './component/Day';
import Header from './component/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EmptyPage from './component/EmptyPage';

const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>                   {/* 화면이 계속 일정한 부분은 Switch 밖 */}
        <Switch>
          <Route exact path="/">          {/* exact 는 정확히 일치할 경우에만 사용한다 */}
            <DayList></DayList>
          </Route>
          <Route path="/day/:day">    {/* 다이나믹한 주소창을 받아야할때는 클론으로 처리할 수 있다. */}
            <Day></Day>
          </Route>
          <Route>         
            <EmptyPage></EmptyPage>    {/* */}
          </Route>
        </Switch>                                     {/* 화면이 바뀌는 부분은 Switch 안 */}
      </div>
    </BrowserRouter>
  );
}

export default App
