

function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    function namedFunction() {
      return true;
    }
    return namedFunction;
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      return true;
    };
  }
  