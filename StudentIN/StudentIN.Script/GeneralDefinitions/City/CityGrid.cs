
namespace StudentIN.GeneralDefinitions
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("GeneralDefinitions.City"), IdProperty(CityRow.IdProperty), NameProperty(CityRow.NameProperty)]
    [DialogType(typeof(CityDialog)), LocalTextPrefix(CityRow.LocalTextPrefix), Service(CityService.BaseUrl)]
    public class CityGrid : EntityGrid<CityRow>
    {
        public CityGrid(jQueryObject container)
            : base(container)
        {
        }
    }
}