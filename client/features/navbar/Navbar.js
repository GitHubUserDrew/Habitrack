import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink,  useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className='Navbar' >
      <h1>HabiTrack</h1>
      <nav >
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <NavLink to="/task">Tasks</NavLink>
            <Link to="/note">Notes</Link>
            <NavLink to="/calendar" className= 'active' >Calendar</NavLink>
            <Link to="/timer">Timer</Link>
            <Link to="/stopwatch">Stopwatch</Link>
            <Link to="/pomodoro">PomodoroTimer</Link>
            <Link to="/account">Account</Link>
            <button type="button" onClick={logoutAndRedirectHome}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
