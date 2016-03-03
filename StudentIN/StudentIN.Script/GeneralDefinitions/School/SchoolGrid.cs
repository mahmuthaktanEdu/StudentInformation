
namespace StudentIN.GeneralDefinitions
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("GeneralDefinitions.School"), IdProperty(SchoolRow.IdProperty), NameProperty(SchoolRow.NameProperty)]
    [DialogType(typeof(SchoolDialog)), LocalTextPrefix(SchoolRow.LocalTextPrefix), Service(SchoolService.BaseUrl)]
    public class SchoolGrid : EntityGrid<SchoolRow>
    {
        public SchoolGrid(jQueryObject container)
            : base(container)
        {
        }
    }
}