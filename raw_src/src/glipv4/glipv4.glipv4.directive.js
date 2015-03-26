angular.module('glIpv4').directive('glIpv4', ["$compile", "$log", function ($compile, $log) {
    'use strict';

    return {
        restrict: 'EA',
        replace: true,
        scope: {
            settings: '=',
            api: '='
        },

        link: function (scope, element, attrs, controller) {

            scope.api = scope.ipv4Api = {};
            scope.ipv4Settings = angular.isUndefined(scope.settings) ? {} : scope.settings;

            if(angular.isUndefined(scope.ipv4Settings.name)){ $log.error('gl-ipv4 settings.name required.'); return; }

            if(angular.isUndefined(scope.ipv4Settings.label)){ scope.ipv4Settings.label = "IPv4"; }

            scope.ipv4Settings.parseSegmentRegex = /\./;
            scope.ipv4Settings.validKeyRegex = /[0-9]/;
            scope.ipv4Settings.processValue = processValue;
            scope.ipv4Settings.delimiter = "."
            scope.ipv4Settings.defaultEmptyValue = "0";
            scope.ipv4Settings.segments = [
                {name: scope.ipv4Settings.name+"-seg-1"},
                {name: scope.ipv4Settings.name+"-seg-2"},
                {name: scope.ipv4Settings.name+"-seg-3"},
                {name: scope.ipv4Settings.name+"-seg-4"}
            ];
            scope.ipv4Settings.tabFocusKeyCodes = [190];

            if(angular.isString(scope.ipv4Settings.placeholder)){
                scope.ipv4Settings.segments[0].placeholder = scope.ipv4Settings.placeholder;
                scope.ipv4Settings.placeholder = undefined;  // remove global placeholder
            }

            function processValue(value){
                value = parseInt(value);
                if(value > 255){ value = 255 }
                if(value < 0){ value = 0 }
                value = value.toString();
                return value;
            }

            var macTemplate = '<gl-segmented-input api="ipv4Api" settings="ipv4Settings" ></gl-segmented-input>';
            var macInput = $compile(macTemplate)(scope);
            element.append(macInput);

        
        }
    };
}]);
