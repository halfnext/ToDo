sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], function(Controller, JSONModel, MessageToast) {
    'use strict';
    return Controller.extend("sap.ui.toDo.controller.Input", {
        onInit : function () {
            let sPath = sap.ui.require.toUrl("sap/ui/toDo/listItem.json");
            let oModel = new JSONModel(sPath);
            this.getView().setModel(oModel);
        },

        onPost : function (oEvent) {
            let sValue = oEvent.getParameter("value");
            let oItem = {
                task: sValue,
                Actions: [
                    {
                        "Text": "Delete",
                        "Icon": "sap-icon://delete",
                        "Key": "delete"
                    }
                ]
            };

            //send data to model
            let oModel = this.getView().getModel();
            let aItems = oModel.getData().listItem;
            aItems.push(oItem);
            oModel.setData({
                listItem: aItems
            });

            MessageToast.show("Item Added to the List");
        },

        onIconPress : function (oEvent) {
            let sIcon = oEvent.getSource().getIcon();
            if (sIcon === "sap-icon://pending") {
                oEvent.getSource().setIcon("sap-icon://accept")
            } else {
                oEvent.getSource().setIcon("sap-icon://pending")
            }

        },

        onDelete : function (oEvent) {
            this.removeItem(oEvent.getParameter("item"));
            MessageToast.show("Activity deleted");
        },

        removeItem: function(oFeedListItem) {
			var sFeedListItemBindingPath = oFeedListItem.getBindingContext().getPath();
			var sFeedListItemIndex = sFeedListItemBindingPath.split("/").pop();
			var aFeedCollection = this.getView().getModel().getProperty("/listItem");

			aFeedCollection.splice(sFeedListItemIndex, 1);
			this.getView().getModel().setProperty("/listItem", aFeedCollection);
		}
    });
});