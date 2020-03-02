/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var formSubmitting = false;
var setFormSubmitting = function() { formSubmitting = true; }; //setting the form submission value to true so the pop up will show

window.onload = function() {
    window.addEventListener("beforeunload", function (e) {
        if (formSubmitting) {
            return undefined;
        }

        var confirmationMessage = 'It looks like you have been editing something. '
                                + 'If you leave before saving, your changes will be lost.';
        //the pop up message shown

        (e || window.event).returnValue = confirmationMessage; // show the message on Gecko + IE
        return confirmationMessage; //show the message Gecko + Webkit, Safari, Chrome and other browsers
    });
};