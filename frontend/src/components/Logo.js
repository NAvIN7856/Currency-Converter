// src/components/Navbar.js
import React from 'react';
import './Logo.css'; // Optional, for custom styling

function Navbar() {
  return (
    <div className="symbolbox">
      <div className="symbolrow">
      <div className="symbol row1">
          <div className="item" style={{'--position': 1}} >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M42.5 12.5H27.5C26.1739 12.5 24.9021 13.0268 23.9645 13.9645C23.0268 14.9021 22.5 16.1739 22.5 17.5V47.5" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M17.5 37.5H27.5" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M22.5 27.5H40" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div className="item" style={{'--position': 2}} >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.5 47.5V12.5H37.5C39.4891 12.5 41.3968 13.2902 42.8033 14.6967C44.2098 16.1032 45 18.0109 45 20C45 21.9891 44.2098 23.8968 42.8033 25.3033C41.3968 26.7098 39.4891 27.5 37.5 27.5H17.5" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M37.5 37.5H17.5" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div className="item" style={{'--position': 3}} >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 47.5V15L40 47.5V15" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12.5 27.5H47.5" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12.5 37.5H47.5" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
            </svg></div>
          <div className="item" style={{'--position': 4}} >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M45 12.5H17.5H25C27.6522 12.5 30.1957 13.5536 32.0711 15.4289C33.9464 17.3043 35 19.8478 35 22.5C35 25.1522 33.9464 27.6957 32.0711 29.5711C30.1957 31.4464 27.6522 32.5 25 32.5H17.5L32.5 47.5" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M17.5 22.5H45" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
            </svg></div>
          <div className="item" style={{'--position': 5}} >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12.5L20 47.5L30 20.1087L40 47.5L50 12.5" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M52.5 25H7.5" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M52.5 35H7.5" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
            </svg></div>
          <div className="item" style={{'--position': 6}} >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 45V15H25C27.6522 15 30.1957 16.0536 32.0711 17.9289C33.9464 19.8043 35 22.3478 35 25V35" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M45 15V45H35C32.3478 45 29.8043 43.9464 27.9289 42.0711C26.0536 40.1957 25 37.6522 25 35V25" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
            </svg></div>
        </div>
        <div className="symbol row2">
          <div className="item" style={{'--position': 1}} >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M37.7856 19.4069C33.0007 17.7976 22.5007 16.2849 21.7467 22.633C20.3446 34.4367 41.4303 26.8644 38.7803 37.6879C37.2883 43.7815 24.855 42.2282 21.0007 40.197" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M30.0006 12V18M30.0006 42V48" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div className="item" style={{'--position': 2}} >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.625 22.5907C36.25 19.6846 34.15 14.1215 28.75 15.1179C22 16.3634 20.875 23.8362 24.25 31.309C26.95 37.2872 20.875 44.5939 17.5 47.5C19.375 46.2545 24.7921 42.7582 29.875 45.0091C35.5 47.5 38.875 45.4242 40 45.0091" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M33 32.9999H18" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div className="item" style={{'--position': 3}} >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 12.5V47.5C29.6413 47.5 34.0925 45.7792 37.3744 42.7161C40.6563 39.653 42.5 35.4985 42.5 31.1667" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15 37.5L35 27.5" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M35 17.5L15 27.5" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div className="item" style={{'--position': 4}} >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 15V45" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12.5 30C21.25 30 27.5 22.5 27.5 15" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12.5 30C21.25 30 27.5 37.5 27.5 45" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M37.5 25V45" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M47.5 25C44.8478 25 42.3043 26.0536 40.4289 27.9289C38.5536 29.8043 37.5 32.3478 37.5 35" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
            </svg></div>
          <div className="item" style={{'--position': 5}} >

            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 15H42.5" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M30 15V47.5" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M20 42.5L40 35" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M40 25L20 32.5" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div className="item" style={{'--position': 6}} >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32.5 47.5V31.25M32.5 31.25L20 15M32.5 31.25L45 15" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M23.9999 42.0001H41.9999" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
        
              <path d="M23.9999 32.9999H41.9999" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
        <div className="symbol row3">
          <div className="item" style={{'--position': 1}} >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 17.9999H35.4545C37.1905 17.9999 38.8554 18.632 40.0829 19.7572C41.3104 20.8825 42 22.4086 42 23.9999C42 25.5912 41.3104 27.1173 40.0829 28.2425C38.8554 29.3677 37.1905 29.9999 35.4545 29.9999C37.1905 29.9999 38.8554 30.632 40.0829 31.7572C41.3104 32.8825 42 34.4086 42 35.9999C42 37.5912 41.3104 39.1173 40.0829 40.2425C38.8554 41.3677 37.1905 41.9999 35.4545 41.9999H21" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M24 17.9999V41.9999" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M24 30H36" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M30 12.0001V18.0001" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M30 42.0001V48.0001" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
            </svg></div>
          <div className="item" style={{'--position': 2}} >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 37.5C21.6421 37.5 25 34.1421 25 30C25 25.8579 21.6421 22.5 17.5 22.5C13.3579 22.5 10 25.8579 10 30C10 34.1421 13.3579 37.5 17.5 37.5Z" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M42.5 25C46.6421 25 50 21.6421 50 17.5C50 13.3579 46.6421 10 42.5 10C38.3579 10 35 13.3579 35 17.5C35 21.6421 38.3579 25 42.5 25Z" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M42.5 50C46.6421 50 50 46.6421 50 42.5C50 38.3579 46.6421 35 42.5 35C38.3579 35 35 38.3579 35 42.5C35 46.6421 38.3579 50 42.5 50Z" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M25 30H32.5L37.5 23.75" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M37.5 36.25L32.5 30" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
            </svg></div>
          <div className="item" style={{'--position': 3}} >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 30L30 10L42.5 30L30 50L17.5 30Z" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M17.5 30L30 22.5L42.5 30L30 35L17.5 30Z" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
            </svg></div>
          <div className="item" style={{'--position': 4}} >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 30H30" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M22.5 15V45" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15 45H30C33.9782 45 37.7936 43.4196 40.6066 40.6066C43.4196 37.7936 45 33.9782 45 30C45 26.0218 43.4196 22.2064 40.6066 19.3934C37.7936 16.5804 33.9782 15 30 15H15" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
            </svg></div>
          <div className="item" style={{'--position': 5}} >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 32.5L32.5 22.5" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M27.7399 10C27.7399 10 16.5944 39.9711 21.0526 45.1834C25.5108 50.3957 40 45.1834 40 45.1834" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
            </svg></div>
          <div className="item" style={{'--position': 6}} >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M41.25 41.25C42.6307 41.25 43.75 40.1307 43.75 38.75C43.75 37.3693 42.6307 36.25 41.25 36.25C39.8693 36.25 38.75 37.3693 38.75 38.75C38.75 40.1307 39.8693 41.25 41.25 41.25Z" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M17.5 17.5C17.5 16.1739 18.0268 14.9021 18.9645 13.9645C19.9021 13.0268 21.1739 12.5 22.5 12.5C23.8261 12.5 25.0979 13.0268 26.0355 13.9645C26.9732 14.9021 27.5 16.1739 27.5 17.5V40C27.5 41.9891 28.2902 43.8968 29.6967 45.3033C31.1032 46.7098 33.0109 47.5 35 47.5C36.9891 47.5 38.8968 46.7098 40.3033 45.3033C41.7098 43.8968 42.5 41.9891 42.5 40V38.75" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M20 27.5H35" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round" />
            </svg></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
