
namespace StudentIN.GeneralDefinitions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("GeneralDefinitions.Section")]
    [BasedOnRow(typeof(Entities.SectionRow))]
    public class SectionForm
    {
        public String Name { get; set; }
    }
}