{
    angular.module('app')
        .controller('GameController', function($http){
            const $ctrl = this;

            $http.post('/access-token').then(function(response){
                $ctrl.tokenResponse = response.data;
                $ctrl.myToken = $ctrl.tokenResponse.access_token;
            });

            $http({
                method: 'GET',
                url: 'https://api.spotify.com/v1/tracks?ids=6rqhFgbbKwnb9MLmUQDhG6',
                data: {
                    Authorization: `Bearer ${$ctrl.myToken}`
                }
            }).then(function(response){
                console.log(response.data);
                $ctrl.tracks = response.data;
                console.log($ctrl.tracks);
            })
            $ctrl.submit = function(){
                $ctrl.songTitle = 'song';
                
                console.log($ctrl.songTitle);
                };
                
            
            
            
        
    });
};