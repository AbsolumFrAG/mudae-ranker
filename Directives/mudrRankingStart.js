mudaeRanker.directive("mudrRankingStart", [
  "Characters",
  "Utilities",
  function (Characters, Utilities) {
    return {
      restrict: "A",
      scope: false,
      link: function (scope, element, attrs) {
        element.on("click", function (event) {
          if (Characters.rankingInProgress) {
            $.MessageBox({
              buttonDone: {
                startOver: {
                  text: "Recommencer",
                },
                resume: {
                  text: "Reprendre",
                },
              },
              buttonFail: "Annuler",
              buttonsOrder: "done fail",
              message:
                "Vous avez déjà classé certains personnages, voulez-vous recommencer ou reprendre le classement ?",
              title: "Confirm Restart",
            })
              .done(function (data, button) {
                if (button === "startOver") {
                  Characters.startRankMode();
                } // resume
                else {
                  Characters.resumeRankMode();
                }
                scope.$apply();
              })
              .fail(function (data, button) {
                console.log("Bien alors, restez en mode édition");
              });
          } else {
            Characters.startRankMode();
            scope.$apply();
          }
        });
      },
    };
  },
]);
