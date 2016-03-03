
namespace StudentIN.GeneralDefinitions
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("GeneralDefinitions.Consultant"), IdProperty(ConsultantRow.IdProperty), NameProperty(ConsultantRow.NameProperty)]
    [DialogType(typeof(ConsultantDialog)), LocalTextPrefix(ConsultantRow.LocalTextPrefix), Service(ConsultantService.BaseUrl)]
    public class ConsultantGrid : EntityGrid<ConsultantRow>
    {
        public ConsultantGrid(jQueryObject container)
            : base(container)
        {
        }
    }
}