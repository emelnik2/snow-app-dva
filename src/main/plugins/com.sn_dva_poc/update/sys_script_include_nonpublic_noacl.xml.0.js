//glidepreprocessor:script:10
var NonpublicNoACL = function(){};
NonpublicNoACL.prototype = Object.extendsObject(AbstractAjaxProcessor, {
	exfilSomeData: function() {
	    var columnName = this.getParameter('sysparm_columnname');

	    var dynamicGr = new GlideRecord('ccsi_test_table');
	    dynamicGr.query();
	    dynamicGr.next();

	    return dynamicGr.getValue(columnName);
	},
	exfilSomeDataTwo: function() {
	    var columnName = this.getParameter('sysparm_columnname');

	    var dynamicGr = new GlideRecord('ccsi_test_table_two');
	    dynamicGr.query();
	    dynamicGr.next();

	    return dynamicGr.getValue(columnName);
	},
	nonDynamic: function() {
	    var nondynamicGr = new GlideRecord('ccsi_test_table');
	    nondynamicGr.query();
	    nondynamicGr.next();

	    return nondynamicGr.getValue('name');
	},
	someUpdate: function() {
	    return this.someUpdateTwo(getParameter('sysparm_input'));
	},
	someUpdateTwo: function(someArg) {
	    var gr = new GlideRecord('ccsi_test_table');
	    gr.query();
	    if(gr.next()) {
	        gr.setValue('name', someArg);
            return gr.update();
	    }
	    return false
	},
	type: 'NonpublicNoACL'
});




let global = {};
global.NonpublicNoACL = NonpublicNoACL;