
namespace StudentIN.GeneralDefinitions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("GeneralDefinitions.RecordState")]
    [BasedOnRow(typeof(Entities.RecordStateRow))]
    public class RecordStateColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Name { get; set; }
    }
}