
namespace StudentIN.GeneralDefinitions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("GeneralDefinitions.City")]
    [BasedOnRow(typeof(Entities.CityRow))]
    public class CityColumns 
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Name { get; set; }
    }
}