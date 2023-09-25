export default function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/MyCapexApplication/Services/service1.service').isDraftEnabled('Capex')) {
        return clientAPI.executeAction({
            'Name': '/MyCapexApplication/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Capex'
                },
                'OnSuccess': '/MyCapexApplication/Actions/Capex/NavToCapex_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/MyCapexApplication/Actions/Capex/NavToCapex_Edit.action');
    }
}