
namespace StudentIN.GeneralDefinitions
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("GeneralDefinitions.RecordState"), IdProperty(RecordStateRow.IdProperty), NameProperty(RecordStateRow.NameProperty)]
    [DialogType(typeof(RecordStateDialog)), LocalTextPrefix(RecordStateRow.LocalTextPrefix), Service(RecordStateService.BaseUrl)]
    public class RecordStateGrid : EntityGrid<RecordStateRow>
    {
        public RecordStateGrid(jQueryObject container)
            : base(container)
        {
        }
    }
}