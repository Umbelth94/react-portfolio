import Card from '../components/Project'
//Import images
import journeyJot from '../assets/images/Journey-Jot.png'
import trailerFinder from '../assets/images/Trailer-Finder.png'
import weatherApp from '../assets/images/Weather-App.png'
import calculator from '../assets/images/calculator.png'
import sketchpad from '../assets/images/sketchpad.png'
import admin from '../assets/images/admin.png'

export default function Portfolio() {
    return (
      <div className = 'container-fluid content'>
        <h1>Portfolio Page</h1>
        <div className = 'container d-flex flex-wrap justify-content-evenly'>
          <Card 
            title ='JourneyJot' 
            subtitle ='Mysql2, express, tailwind, sequelize, openai' 
            image = {journeyJot}
            link = 'https://github.com/Umbelth94/JourneyJot' 
            />
            <Card 
            title ='Trailer Finder' 
            subtitle ='Javascript, HTML, TMDB Api, Foundation CSS Framework' 
            image = {trailerFinder}
            link = 'https://github.com/Umbelth94/Movie-Merch-App' 
            />
            <Card 
            title ='Weather App' 
            subtitle ='Javascript, HTML, Bootstrap, Openweather API' 
            image = {weatherApp}
            link = 'https://github.com/Umbelth94/Weather-App?tab=readme-ov-file' 
            />
            <Card 
            title ='Calculator' 
            subtitle ='JS, CSS, HTML' 
            image = {calculator}
            link = 'https://github.com/Umbelth94/Odin_Calculator' 
            />
            <Card 
            title ='Sketchpad' 
            subtitle ='JS, CSS, HTML' 
            image = {sketchpad}
            link = 'https://github.com/Umbelth94/Sketchpad' 
            />
            <Card 
            title ='Admin Dashboard' 
            subtitle ='HTML, CSS Grid, CSS Flexbox' 
            image = {admin}
            link = 'https://github.com/Umbelth94/AdminDashboard' 
            />
          </div>
      </div>
    );
  }