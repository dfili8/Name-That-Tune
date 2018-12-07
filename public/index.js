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