/* header.js */
(function(){
  'use strict';

  angular
    .module('app')
    .component('fountainHeader', {
      templateUrl: 'app/header.html',
      controller: HeaderController
    });

    HeaderController.$inject = [];
    function HeaderController() {
      var vm = this;

      vm.changeLanguage = changeLanguage;
      
      /* Esta função modifica o idioma do nosso app. */
      function changeLanguage(locale) {
        alert('Você selecionou o idioma: ' + locale);
      }
    }
})();