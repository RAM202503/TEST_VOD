sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'pomanage/test/integration/FirstJourney',
		'pomanage/test/integration/pages/POServiceList',
		'pomanage/test/integration/pages/POServiceObjectPage',
		'pomanage/test/integration/pages/POItemSObjectPage'
    ],
    function(JourneyRunner, opaJourney, POServiceList, POServiceObjectPage, POItemSObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('pomanage') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOServiceList: POServiceList,
					onThePOServiceObjectPage: POServiceObjectPage,
					onThePOItemSObjectPage: POItemSObjectPage
                }
            },
            opaJourney.run
        );
    }
);