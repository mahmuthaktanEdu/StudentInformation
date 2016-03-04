﻿
namespace StudentIN.Northwind
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    [Imported, Serializable, PreserveMemberCase]
    public partial class CustomerRepresentativesRow
    {
        [InlineConstant] public const string IdProperty = "RepresentativeId";
        [InlineConstant] public const string LocalTextPrefix = "CustomerRepresentatives";
    
        public Int32? RepresentativeId { get; set; }
        public Int32? CustomerId { get; set; }
        public Int32? EmployeeId { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string RepresentativeId = "RepresentativeId";
            [InlineConstant] public const string CustomerId = "CustomerId";
            [InlineConstant] public const string EmployeeId = "EmployeeId";
        }
    }
    
}

