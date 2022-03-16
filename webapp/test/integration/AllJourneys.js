/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"ControlTaskGrishchenko/ControlTaskGrishchenko/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ControlTaskGrishchenko/ControlTaskGrishchenko/test/integration/pages/Worklist",
	"ControlTaskGrishchenko/ControlTaskGrishchenko/test/integration/pages/Object",
	"ControlTaskGrishchenko/ControlTaskGrishchenko/test/integration/pages/NotFound",
	"ControlTaskGrishchenko/ControlTaskGrishchenko/test/integration/pages/Browser",
	"ControlTaskGrishchenko/ControlTaskGrishchenko/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ControlTaskGrishchenko.ControlTaskGrishchenko.view."
	});

	sap.ui.require([
		"ControlTaskGrishchenko/ControlTaskGrishchenko/test/integration/WorklistJourney",
		"ControlTaskGrishchenko/ControlTaskGrishchenko/test/integration/ObjectJourney",
		"ControlTaskGrishchenko/ControlTaskGrishchenko/test/integration/NavigationJourney",
		"ControlTaskGrishchenko/ControlTaskGrishchenko/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});