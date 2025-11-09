import React from 'react';
import './App.css';

// 1. Rename the function to start with a capital letter
function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGc.png"
      alt="Alan L. Hart"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}