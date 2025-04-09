sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'soa.db.manageorders',
            componentId: 'List',
            contextPath: '/undefined'
        },
        CustomPageDefinitions
    );
});