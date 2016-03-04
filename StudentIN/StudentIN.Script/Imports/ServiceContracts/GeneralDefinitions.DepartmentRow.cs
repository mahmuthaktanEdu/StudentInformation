
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
    public partial class DepartmentRow
    {
        [InlineConstant] public const string IdProperty = "Id";
        [InlineConstant] public const string NameProperty = "Name";
        [InlineConstant] public const string LocalTextPrefix = "GeneralDefinitions.Department";
    
        public Int32? Id { get; set; }
        public Int32? Code { get; set; }
        public String Name { get; set; }
        public Int32? CityId { get; set; }
        public Int32? TownId { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string Id = "Id";
            [InlineConstant] public const string Code = "Code";
            [InlineConstant] public const string Name = "Name";
            [InlineConstant] public const string CityId = "CityId";
            [InlineConstant] public const string TownId = "TownId";
        }
    }
    
}

