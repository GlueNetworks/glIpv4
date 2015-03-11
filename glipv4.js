/*! 
  glIpv4 v(0.0.4) 
  (c) 2013-2015
  https://gluenetworks.kilnhg.com/Code/Web-Development
  Release Date: 2015-03-11 
*/
angular.module("glIpv4", [ "glTextfield" ]), angular.module("glIpv4").directive("glIpv4", [ "$compile", "$timeout", function($compile) {
    "use strict";
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            settings: "=",
            api: "="
        },
        link: function(scope, element) {
            // period tabs to next field
            function onKeyDown1(evt) {
                190 == evt.keyCode && (evt.preventDefault(), elementInputs[1].find("input").focus());
            }
            function onKeyDown2(evt) {
                190 == evt.keyCode && (evt.preventDefault(), elementInputs[2].find("input").focus());
            }
            function onKeyDown3(evt) {
                190 == evt.keyCode && (evt.preventDefault(), elementInputs[3].find("input").focus());
            }
            function onKeyDown4(evt) {
                190 == evt.keyCode && evt.preventDefault();
            }
            // set segment model values
            function onKeyUp1() {
                scope.api._data.ipSegments[0] = scope.api1.getValue();
            }
            function onKeyUp2() {
                scope.api._data.ipSegments[1] = scope.api2.getValue();
            }
            function onKeyUp3() {
                scope.api._data.ipSegments[2] = scope.api3.getValue();
            }
            function onKeyUp4() {
                scope.api._data.ipSegments[3] = scope.api4.getValue();
            }
            var elementInputsContainer, elementError, elementLabel, elementValue, elementSegmentSeperator, elementInputs = [];
            scope.api = scope.api || {}, scope.api._data = {}, scope.api._data.capsLocked = !1, 
            scope.api._data.numberMouseOverSpinner = !1;
            var classError = "gl-textfield-error", classLabel = "gl-textfield-view-label", classValue = "gl-textfield-view-value";
            scope.api1 = {}, scope.api2 = {}, scope.api3 = {}, scope.api4 = {}, scope.api._data.name = angular.isUndefined(scope.settings.name) ? void 0 : scope.settings.name;
            scope.settings1 = {
                name: "gl-" + scope.api._data.name + "-ipv4-seg-1",
                type: "number",
                numberSpinner: !1,
                onKeyUp: onKeyUp1,
                onKeyDown: onKeyDown1
            }, scope.settings2 = {
                nane: "gl-" + scope.api._data.name + "-ipv4-seg-2",
                type: "number",
                numberSpinner: !1,
                onKeyUp: onKeyUp2,
                onKeyDown: onKeyDown2
            }, scope.settings3 = {
                name: "gl-" + scope.api._data.name + "-ipv4-seg-3",
                type: "number",
                numberSpinner: !1,
                onKeyUp: onKeyUp3,
                onKeyDown: onKeyDown3
            }, scope.settings4 = {
                name: "gl-" + scope.api._data.name + "-ipv4-seg-4",
                type: "number",
                numberSpinner: !1,
                onKeyUp: onKeyUp4,
                onKeyDown: onKeyDown4
            };
            var templateInputs = [ '<gl-textfield class="gl-ipv4-1" api="api1" settings="settings1" >', '<gl-textfield class="gl-ipv4-2" api="api2" settings="settings2" >', '<gl-textfield class="gl-ipv4-3" api="api3" settings="settings3" >', '<gl-textfield class="gl-ipv4-4" api="api4" settings="settings4" >' ], templateInputsContainer = '<div class="gl-ipv4-inputs"></div>', templateError = '<p class="' + classError + '">{{api._data.error}}</p>', templateLabel = '<label class="' + classLabel + '">{{api._data.label}}</label>', templateValue = '<p class="' + classValue + '"></p>', templateSeperator = '<span class="gl-ipv4-segment-seperator">.</span>';
            // MAP SETTINGS
            console.log("scope.settings.value"), console.log(scope.settings.value), scope.api._data.ipSegments = angular.isUndefined(scope.settings.value) ? [] : scope.settings.value.split("."), 
            scope.api._data.valid = angular.isUndefined(scope.settings.valid) ? !0 : scope.settings.valid, 
            scope.api._data.label = angular.isUndefined(scope.settings.label) ? void 0 : scope.settings.label, 
            scope.api._data.disabled = angular.isUndefined(scope.settings.disabled) ? !1 : scope.settings.disabled, 
            scope.api._data.placeholder = angular.isUndefined(scope.settings.placeholder) ? void 0 : scope.settings.placeholder, 
            scope.api._data.error = angular.isUndefined(scope.settings.error) ? void 0 : scope.settings.error, 
            scope.api._data.editable = angular.isUndefined(scope.settings.editable) ? !0 : scope.settings.editable, 
            scope.api.setInvalid = function(msg) {
                scope.api._data.valid = !1, scope.api1.setInvalid(), scope.api2.setInvalid(), scope.api3.setInvalid(), 
                scope.api4.setInvalid(), scope.api._data.error = angular.isString(msg) ? msg : void 0, 
                errorMsgCheck();
            }, scope.api.setValid = function() {
                scope.api._data.valid = !0, scope.api1.setValid(), scope.api2.setValid(), scope.api3.setValid(), 
                scope.api4.setValid(), errorMsgCheck();
            }, scope.api.setValue = function(val) {
                angular.isUndefined(val) || angular.isString(val) && 0 == val.length ? (scope.api1.setValue(), 
                scope.api2.setValue(), scope.api3.setValue(), scope.api4.setValue()) : (scope.api._data.ipSegments = val.split("."), 
                angular.isUndefined(scope.api._data.ipSegments) || (angular.isUndefined(parseInt(scope.api._data.ipSegments[0])) || scope.api1.setValue(parseInt(scope.api._data.ipSegments[0])), 
                angular.isUndefined(parseInt(scope.api._data.ipSegments[1])) || scope.api2.setValue(parseInt(scope.api._data.ipSegments[1])), 
                angular.isUndefined(parseInt(scope.api._data.ipSegments[2])) || scope.api3.setValue(parseInt(scope.api._data.ipSegments[2])), 
                angular.isUndefined(parseInt(scope.api._data.ipSegments[3])) || scope.api4.setValue(parseInt(scope.api._data.ipSegments[3])))), 
                // update view  mode
                angular.isUndefined(elementValue) || elementValue.html(scope.api.getValue());
            }, scope.api.getValue = function() {
                return scope.api._data.ipSegments.join(".");
            }, scope.api.setPlaceholder = function(placeholder) {
                scope.api._data.placeholder = placeholder, scope.api1.setPlaceholder(placeholder);
            }, scope.api.getPlaceholder = function() {
                return scope.api._data.placeholder;
            }, scope.api.setLabel = function(label) {
                scope.api._data.label = label;
            }, scope.api.getLabel = function() {
                return scope.api._data.label;
            }, scope.api.view = function() {
                setViewMode();
            }, scope.api.edit = function() {
                setEditMode();
            }, scope.api.disable = function() {
                scope.api._data.disabled = !0, scope.api1.disable(), scope.api2.disable(), scope.api3.disable(), 
                scope.api4.disable();
            }, scope.api.enable = function() {
                scope.api._data.disabled = !1, scope.api1.enable(), scope.api2.enable(), scope.api3.enable(), 
                scope.api4.enable();
            };
            var getElementInputs = function() {
                elementInputsContainer = angular.element(templateInputsContainer), elementSegmentSeperator = angular.element(templateSeperator);
                for (var i = 0; i < templateInputs.length; i++) {
                    var template = templateInputs[i], el = angular.element(template);
                    elementInputs[i] = el, elementInputsContainer.append(elementInputs[i]), 3 > i && elementInputsContainer.append(elementSegmentSeperator.clone());
                }
                var compiledEls = $compile(elementInputsContainer)(scope);
                return scope.api._data.disabled && scope.api.disable(), compiledEls;
            }, setViewMode = function() {
                scope.api._data.editable = !1, element.children().remove(), angular.isString(scope.api._data.label) && (elementLabel = $compile(angular.element(templateLabel))(scope), 
                element.append(elementLabel)), elementValue = $compile(angular.element(templateValue))(scope), 
                elementValue.html(scope.api.getValue()), element.append(elementValue);
            }, setEditMode = function() {
                scope.api._data.editable = !0, element.children().remove(), element.append(getElementInputs());
                var v = scope.api.getValue();
                // init validity
                if (scope.api.setValue(v), scope.api._data.valid) scope.api.setValid(); else {
                    var errMsg = angular.isString(scope.api._data.error) ? scope.api._data.error : void 0;
                    scope.api.setInvalid(errMsg);
                }
                errorMsgCheck();
            }, errorMsgCheck = function() {
                angular.isUndefined(elementError) || elementError.remove(), scope.api._data.editable && !scope.api._data.valid && angular.isString(scope.api._data.error) && (elementError = $compile(angular.element(templateError))(scope), 
                element.append(elementError));
            };
            // INIT
            angular.isString(scope.api._data.placeholder) && (scope.settings1.placeholder = scope.api._data.placeholder), 
            angular.isUndefined(scope.settings.view) || 1 != scope.settings.view ? setEditMode() : setViewMode();
        }
    };
} ]);