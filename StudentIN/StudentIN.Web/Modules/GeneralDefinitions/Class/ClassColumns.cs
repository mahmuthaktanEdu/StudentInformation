
namespace StudentIN.GeneralDefinitions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("GeneralDefinitions.Class")]
    [BasedOnRow(typeof(Entities.ClassRow))]
    public class ClassColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public Int32 DepartmentId { get; set; }
        [EditLink]
        public String ClassCode { get; set; }
        public String SessionName { get; set; }
        public String Name { get; set; }
    }
}