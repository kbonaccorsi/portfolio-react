import React from 'react';




export default function Nav({ currentPage, handlePageChange }) {
  return (
    <div>
      <ul>
        <li><button>Home Page</button></li>
        <li>About Me</li>
        <li>Contact</li>
        <li>Portfolio</li>
        <li>Resume</li>
      </ul>
    </div>
  );
}