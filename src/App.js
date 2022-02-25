import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import Title from './components/title/Title';
import Footer from './components/footer/Footer';

import './App.css';

export default function App() {
    return (
        <>
          <Title />
          <Nav className="navi">
            <NavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : ""
                };
              }}
              to="/home">Home</NavLink>
            <NavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : ""
                };
              }}
              to="/about-us">About</NavLink>
            <NavLink 
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : ""
                };
              }}
              to="/blogs-and-posts">Blog</NavLink>
            <NavLink 
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : ""
                };
              }}
              to="/contact">Contact</NavLink>
            <NavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : ""
                };
              }}
              to="/brags">Brags</NavLink>
            {/* <NavLink 
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : ""
                };
              }}
            to="/kennel">Kennel</NavLink> */}
            {/* <NavLink 
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : ""
                };
              }}
            to="/litters">Litters</NavLink> */}
            <NavLink 
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : ""
                };
              }}
              to="/training-program">Training Program</NavLink>
          </Nav>
          <Outlet />
          <Footer />
        </>
    );
}