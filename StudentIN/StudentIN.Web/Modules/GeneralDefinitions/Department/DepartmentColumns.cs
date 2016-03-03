
namespace StudentIN.GeneralDefinitions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("GeneralDefinitions.Department")]
    [BasedOnRow(typeof(Entities.DepartmentRow))]
    public class DepartmentColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public Int32 Code { get; set; }
        [EditLink]
        public String Name { get; set; }
        public Int32 CityId { get; set; }
        public Int32 TownId { get; set; }
    }
}