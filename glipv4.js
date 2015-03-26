/*! 
  glIpv4 v(0.0.11) 
  (c) 2013-2015
  https://gluenetworks.kilnhg.com/Code/Web-Development
  Release Date: 2015-03-26 
*/
angular.module("glIpv4", [ "glSegmentedInput" ]), angular.module("glIpv4").directive("glIpv4", [ "$compile", "$log", function($compile, $log) {
    "use strict";
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            settings: "=",
            api: "="
        },
        link: function(scope, element) {
            function processValue(value) {
                return value = parseInt(value), value > 255 && (value = 255), 0 > value && (value = 0), 
                value = value.toString();
            }
            if (scope.api = scope.ipv4Api = {}, scope.ipv4Settings = angular.isUndefined(scope.settings) ? {} : scope.settings, 
            angular.isUndefined(scope.ipv4Settings.name)) return void $log.error("gl-ipv4 settings.name required.");
            angular.isUndefined(scope.ipv4Settings.label) && (scope.ipv4Settings.label = "IPv4"), 
            scope.ipv4Settings.parseSegmentRegex = /\./, scope.ipv4Settings.validKeyRegex = /[0-9]/, 
            scope.ipv4Settings.processValue = processValue, scope.ipv4Settings.delimiter = ".", 
            scope.ipv4Settings.defaultEmptyValue = "0", scope.ipv4Settings.segments = [ {
                name: scope.ipv4Settings.name + "-seg-1"
            }, {
                name: scope.ipv4Settings.name + "-seg-2"
            }, {
                name: scope.ipv4Settings.name + "-seg-3"
            }, {
                name: scope.ipv4Settings.name + "-seg-4"
            } ], scope.ipv4Settings.tabFocusKeyCodes = [ 190 ], angular.isString(scope.ipv4Settings.placeholder) && (scope.ipv4Settings.segments[0].placeholder = scope.ipv4Settings.placeholder, 
            scope.ipv4Settings.placeholder = void 0);
            var macTemplate = '<gl-segmented-input api="ipv4Api" settings="ipv4Settings" ></gl-segmented-input>', macInput = $compile(macTemplate)(scope);
            element.append(macInput);
        }
    };
} ]);