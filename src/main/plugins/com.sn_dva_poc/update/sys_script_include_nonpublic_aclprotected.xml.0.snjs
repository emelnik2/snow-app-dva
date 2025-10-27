//glidepreprocessor:script:10
var NonpublicAclProtected = function(){};
NonpublicAclProtected.prototype = Object.extendsObject(AbstractAjaxProcessor, {
	exfilSomeData: function() { // we should know that to call this, acl `for_nonpublic_aclprotected` must pass
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
	        gr.other = getParameter('sysparm_other');
            return gr.update();
	    }
	    return false
	},
	someUpdateThree: function() {
	    var gr = new GlideRecord('ccsi_test_table');
	    gr.addQuery('name', getParameter('sysparm_name'));
        gr.query();
        if(gr.next()) {
            gr.setValue('col', getParameter('sysparm_col'));
            return gr.update();
        }
        return false;
	},
	someDelete: function() {
	    var gr = new GlideRecord('ccsi_test_table');
	            gr.addQuery('name', getParameter('sysparm_name'));
        gr.query();

        if(gr.next()) {
            return gr.deleteRecord();
        }
        return false;
    },
    someDeleteTwo: function(tableName) {
        var gr = new GlideRecord(tableName);
        gr.query();
        if(gr.next()) {
            return gr.deleteRecord();
        }
        return false;
    },
    someDeleteThree: function() {
       return this.someDeleteTwo('ccsi_test_table');
    },
	type: 'NonpublicAclProtected'
});




let global = {};
global.NonpublicAclProtected = NonpublicAclProtected;