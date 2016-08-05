/* header.js */
(function(){
  'use strict';

  angular
    .module('app')
    .component('fountainHeader', {
      templateUrl: 'app/header.html',
      controller: HeaderController
    });

    HeaderController.$inject = ['$translate'];
    function HeaderController($translate) {
      var vm = this;

      vm.changeLanguage = changeLanguage;
      
      /* Esta função modifica o idioma do nosso app. */
      function changeLanguage(locale) {
        /* Define o novo idioma atual */
        $translate.use(locale);

        /* Recarrega o template (sem recarregar o browser) */
        $state.reload();
      }
    }
})();