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
    public partial class RecordStateRow
    {
        [InlineConstant] public const string IdProperty = "Id";
        [InlineConstant] public const string NameProperty = "Name";
        [InlineConstant] public const string LocalTextPrefix = "GeneralDefinitions.RecordState";
        [InlineConstant] public const string LookupKey = "StudentIN.RecordState";
    
        public static Lookup<RecordStateRow> Lookup { [InlineCode("Q.getLookup('StudentIN.RecordState')")] get { return null; } }
    
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

