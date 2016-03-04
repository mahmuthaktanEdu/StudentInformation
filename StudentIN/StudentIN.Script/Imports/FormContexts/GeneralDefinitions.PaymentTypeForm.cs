
namespace StudentIN.GeneralDefinitions
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    public partial class PaymentTypeForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "GeneralDefinitions.PaymentType";
    
        public PaymentTypeForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor Name { get { return ById<StringEditor>("Name"); } }
        public DecimalEditor PaymentAmount { get { return ById<DecimalEditor>("PaymentAmount"); } }
    }
}

