"use strict"; {
    angular.module('app')
        .controller('GameController', function($http, $timeout, GameService){
            const $ctrl = this;
            const category = GameService.category || '37i9dQZF1DX4SBhb3fqCJd';

            let index = 0;

            $http.post('/access-token').then(function(response){
                $ctrl.tokenResponse = response.data;
                $ctrl.myToken = $ctrl.tokenResponse.access_token;
                console.log($ctrl.myToken, category);

                $http({
                    method: 'GET',
                    url: `https://api.spotify.com/v1/playlists/${category}/tracks?fields=items(track(name%2Cpreview_url%2Calbum(artists(name))))`,
                    headers: {
                        'Authorization': `Bearer ${$ctrl.myToken}`,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(function(response){
                    // $ctrl.preview = response.data.items.tracks[2].preview_url;
                    $ctrl.tracks = shuffleArray(response.data.items.filter(item => item.track.preview_url)).slice(0, 5);
                    $ctrl.selectedTrack = $ctrl.tracks[index].track;
                    console.log($ctrl.selectedTrack);
                    console.log($ctrl.tracks);
                    // console.log($ctrl.preview);
                    
                    
                }).catch(function(err){
                    console.log(err);
                });
                
            }).catch(function(err){
                console.log(err)
            });

           
            $ctrl.submit = function(){
                $ctrl.showAnswer = true
                
            //    $ctrl.correct = $ctrl.answer===$ctrl.tracks.name;
            // //    $ctrl.incorrect = $ctrl.answer!==$ctrl.tracks.name;
                
            //     console.log($ctrl.tracks.name);
                $timeout(() => {
                    $ctrl.showAnswer = false;
                    ++index;
                    if(index === $ctrl.tracks.length) {
                        console.log('Game Over');
                    } else {
                        $ctrl.selectedTrack = $ctrl.tracks[index].track;
                    }
                }, 5000);
            };
              
            
            
            
            $ctrl.clicks = 0;
                function add(){
                clicks++; 
            };
        });

        function shuffleArray (list) {
            // make a copy of original array
            const listCopy = [...list];
            const resultArray = [];
            while(listCopy.length) {
                // while the array has length get a random index
                const randomIndex = Math.floor(Math.random() * listCopy.length);
                // push the item in the new array and remove from the old one
                resultArray.push(...listCopy.splice(randomIndex, 1));
            }
            // return new array
            return resultArray;
        }
};