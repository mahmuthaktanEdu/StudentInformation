
namespace StudentIN.GeneralDefinitions
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    public partial class ClassForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "GeneralDefinitions.Class";
    
        public ClassForm(string idPrefix) : base(idPrefix) {}
    
        public IntegerEditor DepartmentId { get { return ById<IntegerEditor>("DepartmentId"); } }
        public StringEditor ClassCode { get { return ById<StringEditor>("ClassCode"); } }
        public StringEditor SessionName { get { return ById<StringEditor>("SessionName"); } }
        public StringEditor Name { get { return ById<StringEditor>("Name"); } }
    }
}

