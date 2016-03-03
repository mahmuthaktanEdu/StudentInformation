
namespace StudentIN.GeneralDefinitions
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("GeneralDefinitions.Department"), IdProperty(DepartmentRow.IdProperty), NameProperty(DepartmentRow.NameProperty)]
    [DialogType(typeof(DepartmentDialog)), LocalTextPrefix(DepartmentRow.LocalTextPrefix), Service(DepartmentService.BaseUrl)]
    public class DepartmentGrid : EntityGrid<DepartmentRow>
    {
        public DepartmentGrid(jQueryObject container)
            : base(container)
        {
        }
    }
}