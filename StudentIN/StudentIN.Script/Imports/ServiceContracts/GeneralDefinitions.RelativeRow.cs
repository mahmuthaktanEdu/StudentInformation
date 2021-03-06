﻿
namespace StudentIN.GeneralDefinitions
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    [Imported, Serializable, PreserveMemberCase]
    public partial class RelativeRow
    {
        [InlineConstant] public const string IdProperty = "Id";
        [InlineConstant] public const string NameProperty = "Name";
        [InlineConstant] public const string LocalTextPrefix = "GeneralDefinitions.Relative";
        [InlineConstant] public const string LookupKey = "StudentIN.Relative";
    
        public static Lookup<RelativeRow> Lookup { [InlineCode("Q.getLookup('StudentIN.Relative')")] get { return null; } }
    
        public Int32? Id { get; set; }
        public String Name { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string Id = "Id";
            [InlineConstant] public const string Name = "Name";
        }
    }
    
}

