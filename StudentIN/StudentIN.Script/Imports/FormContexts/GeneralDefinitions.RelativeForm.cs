
namespace StudentIN.GeneralDefinitions
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    public partial class RelativeForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "GeneralDefinitions.Relative";
    
        public RelativeForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor Name { get { return ById<StringEditor>("Name"); } }
    }
}

