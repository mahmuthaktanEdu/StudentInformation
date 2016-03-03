
namespace StudentIN.GeneralDefinitions
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("GeneralDefinitions.Class"), IdProperty(ClassRow.IdProperty), NameProperty(ClassRow.NameProperty)]
    [DialogType(typeof(ClassDialog)), LocalTextPrefix(ClassRow.LocalTextPrefix), Service(ClassService.BaseUrl)]
    public class ClassGrid : EntityGrid<ClassRow>
    {
        public ClassGrid(jQueryObject container)
            : base(container)
        {
        }
    }
}