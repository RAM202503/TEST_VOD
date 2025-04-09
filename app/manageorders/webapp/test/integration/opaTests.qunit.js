sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'soa/db/manageorders/test/integration/FirstJourney',
		'soa/db/manageorders/test/integration/pages/List',
		'soa/db/manageorders/test/integration/pages/ObjectPage'
    ],
    function(JourneyRunner, opaJourney, List, ObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('soa/db/manageorders') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheList: List,
					onTheObjectPage: ObjectPage
                }
            },
            opaJourney.run
        );
    }
);