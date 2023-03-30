import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AuthForm from '../features/auth/AuthForm';
import Home from '../features/home/Home';
import { me } from './store';

import {Calendar} from '../../src/components';

import {AllTask} from '../../src/components';
import {Task} from '../../src/components';  // could have to change back to import single task from src/components/singleTaskSlice

import {AllNote} from '../../src/components';
import { SingleNote } from '../../src/components';

import {Account} from '../../src/components';
import {Timer} from '../../src/components';
import {Stopwatch} from '../../src/components';
import {PomodoroTimer} from '../../src/components';

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route to="/home" element={<Home />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/task' element={<AllTask />} />
          <Route path='/task/:id' element={<Task />} />
          <Route path='/note' element={<AllNote />} />
          <Route path='/note/:id' element={<SingleNote />} />
          <Route path='/account' element={<Account />} />
          <Route path='/timer' element={<Timer />} />
          <Route path='/stopwatch' element={<Stopwatch />} />
          <Route path='/pomodoro' element={<PomodoroTimer />} />
          {/* <Route path='/task/:id' element={<Task />} /> change this to AllTask or SingleTask`
          <Route to="/note" element={<Note />} /> change to path
          <Route to="/accounts" element={<Account />} /> change to path */}
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/*"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
