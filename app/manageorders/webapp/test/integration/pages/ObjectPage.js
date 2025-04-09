sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'soa.db.manageorders',
            componentId: 'ObjectPage',
            contextPath: '/undefined'
        },
        CustomPageDefinitions
    );
});