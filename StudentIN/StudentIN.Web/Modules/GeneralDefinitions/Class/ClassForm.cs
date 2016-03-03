
namespace StudentIN.GeneralDefinitions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("GeneralDefinitions.Class")]
    [BasedOnRow(typeof(Entities.ClassRow))]
    public class ClassForm
    {
        public Int32 DepartmentId { get; set; }
        public String ClassCode { get; set; }
        public String SessionName { get; set; }
        public String Name { get; set; }
    }
}