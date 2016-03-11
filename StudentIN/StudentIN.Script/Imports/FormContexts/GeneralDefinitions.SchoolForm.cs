
namespace StudentIN.GeneralDefinitions
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    public partial class SchoolForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "GeneralDefinitions.School";
    
        public SchoolForm(string idPrefix) : base(idPrefix) {}
    
        public IntegerEditor DepartmentId { get { return ById<IntegerEditor>("DepartmentId"); } }
        public StringEditor Code { get { return ById<StringEditor>("Code"); } }
        public StringEditor Name { get { return ById<StringEditor>("Name"); } }
        public IntegerEditor SchoolGroupId { get { return ById<IntegerEditor>("SchoolGroupId"); } }
    }
}

