{
    angular.module('app')
        .controller('HomeController', function(GameService){
            const $ctrl = this;
            
            $ctrl.submit = function(){
                
                console.log($ctrl.name);
                };

            $ctrl.setCategory = function(id){
                GameService.category = id;
            }
            $ctrl.difficulty = ['Hard', 'Easy'];   
        
    });
};