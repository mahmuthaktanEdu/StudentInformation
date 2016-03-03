
namespace StudentIN.GeneralDefinitions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("GeneralDefinitions.Occupation")]
    [BasedOnRow(typeof(Entities.OccupationRow))]
    public class OccupationForm
    {
        public String Name { get; set; }
    }
}