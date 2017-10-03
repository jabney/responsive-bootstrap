(function (window, namespace) {
  'use strict';
  var _project = window[namespace] = Object.create(null);

  _project.scrollListener = function scrollListener(throttleTime, callback) {
    var event = null;

    function onScroll() {
      if (event === null) {
        event = callback
        window.setTimeout(function () {
          event()
          event = null
        }, throttleTime);
      } else {
        event = callback
      }
    }

    window.addEventListener('scroll', onScroll)

    return function () {
      window.removeEventListener('scroll', onScroll)
    }

  };

})(window, 'rbproject')
