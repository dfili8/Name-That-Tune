"use strict"; {
    angular.module('app')
        .controller('GameController', function($http){
            const $ctrl = this;

            $http.post('/access-token').then(function(response){
                $ctrl.tokenResponse = response.data;
                $ctrl.myToken = $ctrl.tokenResponse.access_token;
                console.log($ctrl.myToken);
            });

            $http({
                method: 'GET',
                url: 'https://api.spotify.com/v1/tracks?ids=6rqhFgbbKwnb9MLmUQDhG6',
                headers: {
                    'Authorization': `Bearer ${$ctrl.myToken}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function(response){
                // console.log(response.data);
                $ctrl.tracks = response.data;
                console.log($ctrl.tracks);
            }).catch(function(err){
                console.log(err);
            });
            
            $ctrl.submit = function(){
                $ctrl.songTitle = 'song';
                console.log($ctrl.songTitle);
            };
            
            $ctrl.clicks = 0;
                function add(){
                clicks++; 
            };
        });
};