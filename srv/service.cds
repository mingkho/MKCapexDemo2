using { BusinessPartnerA2X } from './external/BusinessPartnerA2X.cds';

using { MKCapexDemo2 as my } from '../db/schema';

using MKCapexDemo2 from '../db/schema';

@path : '/service/MKCapexDemo2'
service MKCapexDemo2Service
{
    @odata.draft.enabled
    entity Capex as
        projection on my.Capex;

    @odata.draft.enabled
    entity Category as
        projection on my.Category;

    entity BusinessPartner as projection on BusinessPartnerA2X.A_BusinessPartner
    {
        BusinessPartner,
        FirstName,
        LastName
    };
}

annotate MKCapexDemo2Service with @requires :
[
    'authenticated-user'
];
