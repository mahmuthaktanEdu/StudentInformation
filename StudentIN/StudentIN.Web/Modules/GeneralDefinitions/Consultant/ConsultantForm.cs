
namespace StudentIN.GeneralDefinitions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("GeneralDefinitions.Consultant")]
    [BasedOnRow(typeof(Entities.ConsultantRow))]
    public class ConsultantForm
    {
        public Int32 DepartmentId { get; set; }
        public String Name { get; set; }
    }
}