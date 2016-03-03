
namespace StudentIN.GeneralDefinitions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("GeneralDefinitions.Consultant")]
    [BasedOnRow(typeof(Entities.ConsultantRow))]
    public class ConsultantColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public Int32 DepartmentId { get; set; }
        [EditLink]
        public String Name { get; set; }
    }
}