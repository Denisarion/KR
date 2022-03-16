sap.ui.define([
		"ControlTaskGrishchenko/ControlTaskGrishchenko/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("ControlTaskGrishchenko.ControlTaskGrishchenko.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);