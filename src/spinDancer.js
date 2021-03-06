var SpinDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  // Add an animate.cs class to our node
  this.$node.addClass("spinDancer");
}

SpinDancer.prototype = Object.create(Dancer.prototype);
SpinDancer.prototype.constructor = SpinDancer;

SpinDancer.prototype.step = function() {
  // Call the parent step function
  //console.log('In SpinDancer step method');
  //console.log(this);
  //Dancer.prototype.step.call(this);
  // do the rest
  //this.$node.toggle();
  $(this.$node).on('mouseover', function(event) {
    // event.stopPropagation();
    // event.stopImmediatePropagation();
    // do something here - "this" is the span with .dancer and .zoomDancer classes
     $(this).addClass('animated infinite flip');
  });
  $(this.$node).on('mouseout', function(event) {
    // event.stopPropagation();
    // event.stopImmediatePropagation();
    // do something here - "this" is the span with .dancer and .zoomDancer classes
     $(this).removeClass('animated infinite flip');
  });
};

