# GLTextfield
## Overview
An interface to both view and edit a single line of text. It provides both an editable input field as well as a static visual view.

## States

* Unfocused
* Focused
* Invalid
* Invalid + Message
* disabled
* View  - (label + value) and is not an option for password type
* Empty (image/text placeholder)

## HTML

    <gl-ipv4 class="my-ipv4" api="myApi" settings="mySettings"></gl-ipv4>

## Settings

* name - required by angular forms
* editable
* label - used in all but password types
* placeholder
* value
* valid - true/false
* error - init with an error message. requires valid to be false in order to be displayed
* disabled
* onKeyDown - define a callback event for keydown
* onKeyPress - define a callback event for keypress
* onKeyUp - define a callback event for keyup
* onInput - define a callback event for input
* emitEvents - accepts an array of string event names to be emitted. 
  Events are emitted with the emit name formatted as: <settings.name>-<eventanme>  eg. "firstname-keypress"


### Example 

    var mySettings = {
      name: "firstname",
      editable: true,
      label: "name",
      placeholder: "name",
      value: "John",
      invalid: false,
      disabled: false,
      onKeyDown: function(evt){ 
        evt.preventDefault();  
      }
    };

## API Methods

* edit 
* view
* setLabel
* getLabel
* setPlaceholder
* getPlaceholder
* setValue
* getValue
* setInvalid
* setValid
* enable
* disable

### Example API

    var myApi = {};
    
    // Api Method call examples
    myApi.disable();     // Disabled the input field leaving text visible but not editable.
    myApi.enable();      // Enables editing of the input field
    myApi.setPlaceholder("My Placeholder");  // sets the input field placeholder text
    myApi.getPlaceholder();   // returns "My Placeholder"
    myApi.setValue("abc");  // Sets the value of the input field
    myApi.getValue();       // returns "abc", the value of the input field
    myApi.setInvalid();   // adds the "gl-invalid" input class.
    myApi.setInvalid("Danger");   // adds the "gl-invalid" input class plus displays the invalid message text.

    // These are available for all except 'password' types.
    myApi.edit();        // enables edit mode
    myApi.view();        // enables view mode
    myApi.setLabel("MyLabel");    // Sets the view mode label text
    myApi.getLabel();     // returns "MyLable"

    
## Image placeholder CSS
When the ipv4 is empty, there will be the existence of the input.gl-empty class in which you can define a background-image, among other things.

### Example

    .my-ipv4 input.gl-empty {
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz...);
        background-position-x: 0px;
        background-position-y: 0px;
        background-repeat: no-repeat;
        background-size : 30px 30px;
      }
