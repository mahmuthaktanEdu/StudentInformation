
namespace StudentIN.GeneralDefinitions
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("GeneralDefinitions.Occupation"), IdProperty(OccupationRow.IdProperty), NameProperty(OccupationRow.NameProperty)]
    [DialogType(typeof(OccupationDialog)), LocalTextPrefix(OccupationRow.LocalTextPrefix), Service(OccupationService.BaseUrl)]
    public class OccupationGrid : EntityGrid<OccupationRow>
    {
        public OccupationGrid(jQueryObject container)
            : base(container)
        {
        }
    }
}