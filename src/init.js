$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      ($("body").height() - 100) * Math.random(),
      ($("body").width() - 100) * Math.random(),
      Math.random() * 1000
    );
    // Add the dancer to the HTML in the body
    $('body').append(dancer.$node);
    // Add the dancer to the array of dancers in the window.
    window.dancers.push(dancer);
  });

  $('.lineUpButton').on('click', function(event) {
    // Iterate through the array of dancers
    for (let i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp(window.dancers);
    }
  });

  $('.unLineUpButton').on('click', function(event) {
    // Iterate through the array of dancers
    for (let i = 0; i < window.dancers.length; i++) {
      window.dancers[i].unLineUp();
    }
  });




  // $().on('click', function() {
  //   console.log(this)
  //   $(this).fadeToggle();

  // });
});

