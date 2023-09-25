export default function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/MyCapexApplication/Services/service1.service').isDraftEnabled('Capex')) {
        return clientAPI.executeAction({
            'Name': '/MyCapexApplication/Actions/Capex/Capex_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/MyCapexApplication/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Capex'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/MyCapexApplication/Actions/Capex/Capex_UpdateEntity.action');
    }
}