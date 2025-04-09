sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'pomanage',
            componentId: 'POItemSObjectPage',
            contextPath: '/POService/Items'
        },
        CustomPageDefinitions
    );
});