import React from 'react';
import './App.css';
import { Profile } from './Components/Profile';
import { Congratulations } from './Components/Congratulations';


export default function App() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
      <Congratulations />
    </section>
  );
}