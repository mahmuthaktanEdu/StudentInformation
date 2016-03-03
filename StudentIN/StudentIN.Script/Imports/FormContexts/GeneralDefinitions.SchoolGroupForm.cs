
namespace StudentIN.GeneralDefinitions
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    public partial class SchoolGroupForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "GeneralDefinitions.SchoolGroup";

        public SchoolGroupForm(string idPrefix) : base(idPrefix) {}


        public StringEditor Name { get { return ById<StringEditor>("Name"); } }
    }
}