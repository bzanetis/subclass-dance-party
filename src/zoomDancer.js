var ZoomDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
}

ZoomDancer.prototype = Object.create(Dancer.prototype);
ZoomDancer.prototype.constructor = ZoomDancer;

ZoomDancer.prototype.step = function() {
  // Call the parent step function
  //console.log('In ZoomDancer step method');
  //console.log(this);
  Dancer.prototype.step.call(this);
  // do the rest
  this.$node.toggle();
};

