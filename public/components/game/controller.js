"use strict"; {
    angular.module('app')
        .controller('GameController', function($http, GameService){
            const $ctrl = this;
            const category = GameService.category || '37i9dQZF1DX4SBhb3fqCJd';

            $http.post('/access-token').then(function(response){
                $ctrl.tokenResponse = response.data;
                $ctrl.myToken = $ctrl.tokenResponse.access_token;
                console.log($ctrl.myToken, category);

                $http({
                    method: 'GET',
                    url: `https://api.spotify.com/v1/playlists/${category}/tracks?fields=items(track(name%2Cpreview_url))`,
                    headers: {
                        'Authorization': `Bearer ${$ctrl.myToken}`,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(function(response){
                    $ctrl.tracks = response.data.items[2];
                    console.log($ctrl.tracks);

                    
                }).catch(function(err){
                    console.log(err);
                });
                
            }).catch(function(err){
                console.log(err)
            });

           
            $ctrl.submit = function(){
                
               $ctrl.correct = $ctrl.answer===$ctrl.tracks.name;
            //    $ctrl.incorrect = $ctrl.answer!==$ctrl.tracks.name;
                
                console.log($ctrl.tracks.name);
                };
                
            
            
            
            $ctrl.clicks = 0;
                function add(){
                clicks++; 
            };
        });
};