
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
    public partial class ClassRow
    {
        [InlineConstant] public const string IdProperty = "Id";
        [InlineConstant] public const string NameProperty = "ClassCode";
        [InlineConstant] public const string LocalTextPrefix = "GeneralDefinitions.Class";
        [InlineConstant] public const string LookupKey = "StudentIN.Class";
    
        public static Lookup<ClassRow> Lookup { [InlineCode("Q.getLookup('StudentIN.Class')")] get { return null; } }
    
        public Int32? Id { get; set; }
        public Int32? DepartmentId { get; set; }
        public String ClassCode { get; set; }
        public String SessionName { get; set; }
        public String Name { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string Id = "Id";
            [InlineConstant] public const string DepartmentId = "DepartmentId";
            [InlineConstant] public const string ClassCode = "ClassCode";
            [InlineConstant] public const string SessionName = "SessionName";
            [InlineConstant] public const string Name = "Name";
        }
    }
    
}

