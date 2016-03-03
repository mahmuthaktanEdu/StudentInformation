
namespace StudentIN.GeneralDefinitions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("GeneralDefinitions.School")]
    [BasedOnRow(typeof(Entities.SchoolRow))]
    public class SchoolForm
    {
        public Int32 DepartmentId { get; set; }
        public String Code { get; set; }
        public String Name { get; set; }
        public Int32 SchoolGroupId { get; set; }
    }
}