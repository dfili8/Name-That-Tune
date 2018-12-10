{
    angular.module('app')
        .controller('ScoreController', function(GameService){
            const $ctrl = this;
            
            $ctrl.playerName = GameService.name;

        

            const score  = GameService.score;
            $ctrl.playerScore = GameService.score;

        
    });
};