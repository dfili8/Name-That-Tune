"use strict";
{
    angular.module('app')
        .controller('TimerController', function($interval){

          const $ctrl = this;
          $ctrl.counter = 15;
          $ctrl.startTimer = () => {
               
                        const id = $interval(function() {
                          $ctrl.counter--;
                          if ($ctrl.counter === 0) {
                              alert('Sorry, out of time. Onto the next question!');
                              clearInterval(id);
                          }
                        }, 1000);
                      }
                    
            
        })