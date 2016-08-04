angular.module('minhasDiretivas',[])
.directive('meuPainel', function() {
    var ddo = {}; //directive definition object

    ddo.restrict = "AE";

    ddo.scope = {

        titulo: '@titulo'
    };

    ddo.transclude = true; //manter elementos filhos

    ddo.templateUrl = 'js/directives/meu-painel.html';

    return ddo;
})