import './About.css'
import picture from '../assets/images/me.jpg'

export default function About() {
    return (
        <div className = 'container-fluid content'>
            <h2>About me</h2>
            <img src={picture} className='profile-pic'></img>
            <p>
                My name is Travis Umbel.  I'm currently fresh out of the UW-Madison web development bootcamp and I am trying to make my way into the world of web development.  I currently live in Madison Wisconsin, and on weekends you'll find me camping, disc golfing, making music with my friends, or hiking wherever I can find lots of trees.  If the weather is bad, then I'll be gaming online or working on some small side projects.  Hopefully you will hear about them soon!  
            </p>
            <p>
                Throughout the bootcamp, I have worked with a variety of technologies that were focused on Javascript and the MERN stack.  Some of those technologies include Mysql2, React, Node, Express.js, MongoDB and Mongoose.  I have a strong preference for working on the back end because I enjoy building out API's and working with databases.  Take a look at my portfolio or github page, and if you'd like to contact me, you can find my information in the contact tab. 
            </p>
        </div>
    )
};