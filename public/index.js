"use strict";
{
    angular.module('app',['ngRoute'])
        .config( function($routeProvider){
            $routeProvider
                .when('/',{
                    template: '<home></home>'
                })
                .when('/game',{
                    template: '<game></game>'
                })
                .when('/score',{
                    template: '<score></score>'
                })
                .otherwise({
                    template: '<h1>404 PAGE DOES NOT EXIST</h1>'
                })
        });
}


// "use strict"; {
//     angular.module('app', []);
// }

// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }

// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {

//     let dropdowns = document.getElementsByClassName("dropdown-content");
//     let i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

//first fucntion
//function startTimer(duration, display) {
//    let timer = duration, minutes, seconds;
//    setInterval(function () {
//        minutes = parseInt(timer / 60, 10)
//        seconds = parseInt(timer % 60, 10);
//
//        minutes = minutes < 10 ? "0" + minutes : minutes;
//        seconds = seconds < 10 ? "0" + seconds : seconds;
//
//        display.textContent = minutes + ":" + seconds;
//
//        if (--timer < 0) {
//            timer = duration;
//        }
//    }, 1000);
//}
//
//window.onload = function () {
//    let tenSeconds = 15 * 1,
//        display = document.querySelector('#time');
//    startTimer(tenSeconds, display);
//};
//
////second function
//let clicks = 0;
//function add(){
//    clicks++; 
//};