sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(Controller, MessageToast) {
    'use strict';
    return Controller.extend("sap.ui.toDo.controller.Main", {
        onAddItem : function() {
            MessageToast.show("Item Added to List");
        }
    });
});