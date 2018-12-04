{
    angular.module('app')
        .controller('GameController', function(){
            const $ctrl = this;

            $ctrl.submit = function(){
                $ctrl.songTitle = 'song';
                
                console.log($ctrl.songTitle);
                };
                
            
            
            
        
    });
};