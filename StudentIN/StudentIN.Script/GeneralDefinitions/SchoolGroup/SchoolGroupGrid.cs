
namespace StudentIN.GeneralDefinitions
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("GeneralDefinitions.SchoolGroup"), IdProperty(SchoolGroupRow.IdProperty), NameProperty(SchoolGroupRow.NameProperty)]
    [DialogType(typeof(SchoolGroupDialog)), LocalTextPrefix(SchoolGroupRow.LocalTextPrefix), Service(SchoolGroupService.BaseUrl)]
    public class SchoolGroupGrid : EntityGrid<SchoolGroupRow>
    {
        public SchoolGroupGrid(jQueryObject container)
            : base(container)
        {
        }
    }
}