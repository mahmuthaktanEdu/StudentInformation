
namespace StudentIN.GeneralDefinitions
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("GeneralDefinitions.Section"), IdProperty(SectionRow.IdProperty), NameProperty(SectionRow.NameProperty)]
    [DialogType(typeof(SectionDialog)), LocalTextPrefix(SectionRow.LocalTextPrefix), Service(SectionService.BaseUrl)]
    public class SectionGrid : EntityGrid<SectionRow>
    {
        public SectionGrid(jQueryObject container)
            : base(container)
        {
        }
    }
}