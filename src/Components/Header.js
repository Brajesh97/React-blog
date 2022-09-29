import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../AppStyles.module.css';
import MobileNavigation from './MobileNavigation';

const Header = () => {
  return (
    <div>
      <div className={styles.main_Header}>
        <div className={styles.main_Header_Top}>
          <div>
            <NavLink to='/home' className={styles.main_Header_Logo}>
              <div className={styles.main_Header_Logo_Top}>The</div>
              <div className={styles.main_Header_Logo_Bottom}>Siren</div>
            </NavLink>
          </div>
          <div>
            <MobileNavigation />
          </div>
        </div>
        <div className={styles.main_Header_Bottom}>
          <div>
            <NavLink
              to='/home'
              className={styles.main_Header_Items}
              style={({ isActive }) => {
                return {
                  color: isActive ? 'white' : 'black',
                  backgroundColor: isActive ? 'black' : 'white',
                };
              }}
            >
              HOME
            </NavLink>
          </div>
          <div>
            <NavLink
              to='/categoryPage/Bollywood'
              className={styles.main_Header_Items}
              style={({ isActive }) => {
                return {
                  color: isActive ? 'white' : 'black',
                  backgroundColor: isActive ? 'black' : 'white',
                };
              }}
            >
              BOLLYWOOD
            </NavLink>
          </div>
          <div>
            <NavLink
              to='/categoryPage/Technology'
              className={styles.main_Header_Items}
              style={({ isActive }) => {
                return {
                  color: isActive ? 'white' : 'black',
                  backgroundColor: isActive ? 'black' : 'white',
                };
              }}
            >
              TECHNOLOGY
            </NavLink>
          </div>
          <div>
            <NavLink
              to='/categoryPage/Hollywood'
              className={styles.main_Header_Items}
              style={({ isActive }) => {
                return {
                  color: isActive ? 'white' : 'black',
                  backgroundColor: isActive ? 'black' : 'white',
                };
              }}
            >
              HOLLYWOOD
            </NavLink>
          </div>
          <div>
            <NavLink
              to='/categoryPage/Fitness'
              className={styles.main_Header_Items}
              style={({ isActive }) => {
                return {
                  color: isActive ? 'white' : 'black',
                  backgroundColor: isActive ? 'black' : 'white',
                };
              }}
            >
              FITNESS
            </NavLink>
          </div>
          <div>
            <NavLink
              to='/categoryPage/Food'
              className={styles.main_Header_Items}
              style={({ isActive }) => {
                return {
                  color: isActive ? 'white' : 'black',
                  backgroundColor: isActive ? 'black' : 'white',
                };
              }}
            >
              FOOD
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;