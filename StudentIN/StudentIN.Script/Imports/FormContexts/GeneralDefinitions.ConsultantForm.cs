
namespace StudentIN.GeneralDefinitions
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    public partial class ConsultantForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "GeneralDefinitions.Consultant";

        public ConsultantForm(string idPrefix) : base(idPrefix) {}


        public IntegerEditor DepartmentId { get { return ById<IntegerEditor>("DepartmentId"); } }
        public StringEditor Name { get { return ById<StringEditor>("Name"); } }
    }
}