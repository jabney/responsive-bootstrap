(function (window, namespace) {
  'use strict';
  var _project = window[namespace] = Object.create(null);

  _project.scrollListener = function scrollListener(throttleTime, callback) {
    var eventStack = []

    function onScroll() {
      if (eventStack.length === 0) {
        eventStack.push(callback)
        window.setTimeout(function () {
          if (eventStack.length) {
            eventStack.pop()()
          }
          while(eventStack.length) {
            eventStack.pop()
          }
        }, throttleTime);
      } else {
        eventStack.push(callback)
      }
    }

    window.addEventListener('scroll', onScroll)

    return function () {
      window.removeEventListener('scroll', onScroll)
    }

  };

})(window, 'rbproject')
