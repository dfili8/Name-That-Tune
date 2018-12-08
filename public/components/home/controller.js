{
    angular.module('app')
        .controller('HomeController', function(GameService){
            const $ctrl = this;
            
            $ctrl.submit = function(){
                
                window.location = "#!/game";
                };

            $ctrl.setCategory = function(id){
                GameService.category = id;
            }
            $ctrl.difficulty = ['Hard', 'Easy'];  
            
            $ctrl.playerName = $ctrl.playerName.value;
        
    });
};