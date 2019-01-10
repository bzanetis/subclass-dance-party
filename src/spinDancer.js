var SpinDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
}

SpinDancer.prototype = Object.create(Dancer.prototype);
SpinDancer.prototype.constructor = SpinDancer;

SpinDancer.prototype.step = function() {
  // Call the parent step function
  //console.log('In SpinDancer step method');
  //console.log(this);
  Dancer.prototype.step.call(this);
  // do the rest
  this.$node.toggle();
};

