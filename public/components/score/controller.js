{
    angular.module('app')
        .controller('ScoreController', function(GameService){
            const $ctrl = this;
            
            $ctrl.playerName = GameService.name;

        

<<<<<<< HEAD
            // const score  = GameService.score;
=======
>>>>>>> be924a836610109b0ba210ea778c24de385ec72a
            $ctrl.playerScore = GameService.score;

        
    });
};