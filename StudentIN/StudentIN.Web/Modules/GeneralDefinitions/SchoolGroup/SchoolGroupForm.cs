
namespace StudentIN.GeneralDefinitions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("GeneralDefinitions.SchoolGroup")]
    [BasedOnRow(typeof(Entities.SchoolGroupRow))]
    public class SchoolGroupForm
    {
        public String Name { get; set; }
    }
}