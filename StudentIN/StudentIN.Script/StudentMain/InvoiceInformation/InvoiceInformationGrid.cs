
namespace StudentIN.StudentMain
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("StudentMain.InvoiceInformation"), IdProperty(InvoiceInformationRow.IdProperty), NameProperty(InvoiceInformationRow.NameProperty)]
    [DialogType(typeof(InvoiceInformationDialog)), LocalTextPrefix(InvoiceInformationRow.LocalTextPrefix), Service(InvoiceInformationService.BaseUrl)]
    public class InvoiceInformationGrid : EntityGrid<InvoiceInformationRow>
    {
        public InvoiceInformationGrid(jQueryObject container)
            : base(container)
        {
        }
    }
}