
namespace StudentIN.GeneralDefinitions
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    public partial class DepartmentForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "GeneralDefinitions.Department";
    
        public DepartmentForm(string idPrefix) : base(idPrefix) {}
    
        public IntegerEditor Code { get { return ById<IntegerEditor>("Code"); } }
        public StringEditor Name { get { return ById<StringEditor>("Name"); } }
        public IntegerEditor CityId { get { return ById<IntegerEditor>("CityId"); } }
        public IntegerEditor TownId { get { return ById<IntegerEditor>("TownId"); } }
    }
}

