{
    angular.module('app')
        .controller('HomeController', function(){
            const $ctrl = this;
            
            $ctrl.submit = function(){
                
                console.log($ctrl.name);
                };

            $ctrl.difficulty = ['Hard', 'Easy'];   
        
    });
};