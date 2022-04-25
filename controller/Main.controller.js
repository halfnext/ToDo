sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function(Controller, MessageToast, JSONModel) {
    'use strict';
    return Controller.extend("sap.ui.toDo.controller.Main", {
        onInit : function () {
            let oData = {
                listItem : {
                    task: "First"
                }
            };
            let oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        }, 
        onAddItem : function() {
            MessageToast.show("Item Added to the List");
        }
    });
});