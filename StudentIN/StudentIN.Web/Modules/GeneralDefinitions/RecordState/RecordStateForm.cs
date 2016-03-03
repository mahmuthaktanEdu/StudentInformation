
namespace StudentIN.GeneralDefinitions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("GeneralDefinitions.RecordState")]
    [BasedOnRow(typeof(Entities.RecordStateRow))]
    public class RecordStateForm
    {
        public String Name { get; set; }
    }
}