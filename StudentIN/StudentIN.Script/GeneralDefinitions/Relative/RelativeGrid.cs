
namespace StudentIN.GeneralDefinitions
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("GeneralDefinitions.Relative"), IdProperty(RelativeRow.IdProperty), NameProperty(RelativeRow.NameProperty)]
    [DialogType(typeof(RelativeDialog)), LocalTextPrefix(RelativeRow.LocalTextPrefix), Service(RelativeService.BaseUrl)]
    public class RelativeGrid : EntityGrid<RelativeRow>
    {
        public RelativeGrid(jQueryObject container)
            : base(container)
        {
        }
    }
}