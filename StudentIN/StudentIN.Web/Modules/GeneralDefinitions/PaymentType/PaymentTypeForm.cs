
namespace StudentIN.GeneralDefinitions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("GeneralDefinitions.PaymentType")]
    [BasedOnRow(typeof(Entities.PaymentTypeRow))]
    public class PaymentTypeForm
    {
        public String Name { get; set; }
        public Decimal PaymentAmount { get; set; }
    }
}