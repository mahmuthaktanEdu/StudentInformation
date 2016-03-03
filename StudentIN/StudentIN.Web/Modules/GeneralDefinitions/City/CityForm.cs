
namespace StudentIN.GeneralDefinitions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("GeneralDefinitions.City")]
    [BasedOnRow(typeof(Entities.CityRow))]
    public class CityForm
    {
        public String Name { get; set; }
    }
}