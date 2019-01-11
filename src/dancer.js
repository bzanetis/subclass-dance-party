// Creates and returns a new dancer object that can step
// Create a Dancer class
var Dancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');

  // invoke the step function to start setTimeOut
  this.step();
  // set the intial style settings
  this.setPosition(this.top, this.left);
};


Dancer.prototype.step = function() {
  //console.log('In Dancer step method');
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
}

Dancer.prototype.setPosition = function(top, left) {
  let styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(dancersArray) {
  // How do we make the dancers line up in relation to each other, when this is called for each dancer in window.dancers[];
  let top = 42;
  let left = 10;
  let topDiff = 40;
  let leftDiff = 0;
  // Iterate through the array of dancers
  for (let i = 0; i < dancersArray.length; i++) {
  // Britt -- I removed the check for dancer type that was here
  // For each dancer set the position
      dancersArray[i].setPosition(top, left);
      top += topDiff;
      left += leftDiff
  }
};

/*// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  var dancer = {};

  // use jQuery to create an HTML <span> tag
  dancer.$node = $('<span class="dancer"></span>');

  dancer.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(dancer.step, timeBetweenSteps);
  };
  dancer.step();

  dancer.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    dancer.$node.css(styleSettings);
  };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  dancer.setPosition(top, left);

  return dancer;
};*/