
namespace StudentIN.GeneralDefinitions
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("GeneralDefinitions.PaymentType"), IdProperty(PaymentTypeRow.IdProperty), NameProperty(PaymentTypeRow.NameProperty)]
    [DialogType(typeof(PaymentTypeDialog)), LocalTextPrefix(PaymentTypeRow.LocalTextPrefix), Service(PaymentTypeService.BaseUrl)]
    public class PaymentTypeGrid : EntityGrid<PaymentTypeRow>
    {
        public PaymentTypeGrid(jQueryObject container)
            : base(container)
        {
        }
    }
}