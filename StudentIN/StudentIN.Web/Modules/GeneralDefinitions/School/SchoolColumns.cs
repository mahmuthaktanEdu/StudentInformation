
namespace StudentIN.GeneralDefinitions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("GeneralDefinitions.School")]
    [BasedOnRow(typeof(Entities.SchoolRow))]
    public class SchoolColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public Int32 DepartmentId { get; set; }
        [EditLink]
        public String Code { get; set; }
        public String Name { get; set; }
        public Int32 SchoolGroupId { get; set; }
    }
}