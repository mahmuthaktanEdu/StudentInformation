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
    public partial class ProductLangRow
    {
        [InlineConstant] public const string IdProperty = "Id";
        [InlineConstant] public const string NameProperty = "ProductName";
        [InlineConstant] public const string LocalTextPrefix = "Northwind.ProductLang";
    
        public Int32? Id { get; set; }
        public Int32? ProductId { get; set; }
        public Int32? LanguageId { get; set; }
        public String ProductName { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string Id = "Id";
            [InlineConstant] public const string ProductId = "ProductId";
            [InlineConstant] public const string LanguageId = "LanguageId";
            [InlineConstant] public const string ProductName = "ProductName";
        }
    }
    
}

