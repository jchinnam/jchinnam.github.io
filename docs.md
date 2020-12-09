# documentation

##### starting out
wanted to go simple this time--started with a simple bootstrap [template](https://bootstrapmade.com/free-html-bootstrap-template-my-resume/) and stripped it down to its bones--removed everything, leaving only the `hero` section

##### adding particles
integration of `particles.js`, [by vincent garreau](https://github.com/VincentGarreau/particles.js)

1. downloaded javascript `particles.js` and `particles-config.js` (originally called `app.js`, you can either load here or copy config into it)
2. designed config json in [generator](https://vincentgarreau.com/particles.js/) and copied into `particles-config.js`
3. added css into `css/style.css`
```
/* ---- particles.js container ---- */
 #particles-js{
   width: 100%;
   height: 100%;
   position: fixed;
   background-color: #000000;
   background-image: url('');
   background-size: cover;
   background-position: 50% 50%;
   background-repeat: no-repeat;
 }
```
4. added html into `index.html` within `<body>`
```
<!-- particles.js container -->
   <div id="particles-js"></div>

   <!-- particles.js scripts -->
   <script src="js/particles.js"></script>
   <script src="js/particles-config.js"></script>
```

##### going dark mode
in `style.css`:
- particles container background to black
```
 #particles-js{
   background-color: #000000;
 }
 ```
- bring down opacity of hero background (in front of particles)
```
#hero:before {
   background: rgba(255, 255, 255, 0.2); /*down from 0.8*/
}
```
- header and text to white
```
#hero h1 {
   color: #fff;
}
body {
   color: #fff; /* main text color */
 }
```
- links & hover colors to light green / green respectively
```
a {
   color: #D2FD88; /* main link color */
}
a:hover {
   color: #A9FD17; /* main link hover color */
}
#hero .social-links a {
   color: #D2FD88; /* social icon link color */
}
#hero .social-links a:hover {
   color: #A9FD17; /* social icon link hover color */
}
```
