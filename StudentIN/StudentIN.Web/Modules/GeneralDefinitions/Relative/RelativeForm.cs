
namespace StudentIN.GeneralDefinitions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("GeneralDefinitions.Relative")]
    [BasedOnRow(typeof(Entities.RelativeRow))]
    public class RelativeForm
    {
        public String Name { get; set; }
    }
}