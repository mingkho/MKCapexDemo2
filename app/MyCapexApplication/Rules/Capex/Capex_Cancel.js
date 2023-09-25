export default function Cancel(clientAPI) {
    if (clientAPI.getODataProvider('/MyCapexApplication/Services/service1.service').isDraftEnabled('Capex')) {
        return clientAPI.executeAction({
            'Name': '/MyCapexApplication/Actions/DraftDiscardEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Capex'
                },
                'OnSuccess': '/MyCapexApplication/Actions/CloseModalPage_Cancel.action'
            }
        });
    } else {
        return clientAPI.executeAction('/MyCapexApplication/Actions/CloseModalPage_Cancel.action');
    }
}