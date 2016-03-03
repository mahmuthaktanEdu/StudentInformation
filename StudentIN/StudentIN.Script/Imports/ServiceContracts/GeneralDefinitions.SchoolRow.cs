
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
    public partial class SchoolRow
    {
        [InlineConstant] public const string IdProperty = "Id";
        [InlineConstant] public const string NameProperty = "Code";
        [InlineConstant] public const string LocalTextPrefix = "GeneralDefinitions.School";

        public Int32? Id { get; set; }
        public Int32? DepartmentId { get; set; }
        public String Code { get; set; }
        public String Name { get; set; }
        public Int32? SchoolGroupId { get; set; }
        public String SchoolGroupName { get; set; }

        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string Id = "Id";
            [InlineConstant] public const string DepartmentId = "DepartmentId";
            [InlineConstant] public const string Code = "Code";
            [InlineConstant] public const string Name = "Name";
            [InlineConstant] public const string SchoolGroupId = "SchoolGroupId";
            [InlineConstant] public const string SchoolGroupName = "SchoolGroupName";
        }
    }
}