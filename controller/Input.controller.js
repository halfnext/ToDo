sap.ui.define([
    "sap/ui/core/mvc/Controller",
], function(Controller) {
    'use strict';
    return Controller.extend("sap.ui.toDo.controller.Input", {
        post : function () {
            alert("Hi")
        }
    });
});