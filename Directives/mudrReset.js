mudaeRanker.directive("mudrReset", [
  "Characters",
  "Utilities",
  function (Characters, Utilities) {
    return {
      restrict: "A",
      scope: false,
      link: function (scope, element, attrs) {
        element.on("click", function (event) {
          Utilities.confirm(
            "Tu es sûr que tu veux tout réinitialiser ?",
            "Confirmer la réinitialisation"
          )
            .done(function (data, button) {
              $("#InputField").val("");
              $("#OutputField").val("");
              Characters.clean();
              scope.$apply();
            })
            .fail(function (data, button) {
              console.log("Alors pourquoi avez-vous cliqué sur le bouton de réinitialisation ?");
            });
        });
      },
    };
  },
]);
