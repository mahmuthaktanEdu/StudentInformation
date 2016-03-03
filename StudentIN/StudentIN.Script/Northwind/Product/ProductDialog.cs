﻿
namespace StudentIN.Northwind
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("ProductID"), NameProperty("ProductName")]
    [FormKey("Northwind.Product"), LocalTextPrefix("Northwind.Product"), Service("Northwind/Product")]
    public class ProductDialog : EntityDialog<ProductRow>
    {
        protected override IEnumerable<System.Tuple<string, string>> GetLanguages()
        {
            return LanguageList.Value;
        }
    }
}