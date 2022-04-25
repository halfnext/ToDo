sap.ui.define([
    "sap/ui/core/mvc/XMLView"
], function(XMLView) {
    'use strict';
    XMLView.create({
        viewName: "sap.ui.toDo.view.Main"
    }).then(function (oView) {
        oView.placeAt("container");
    })
});