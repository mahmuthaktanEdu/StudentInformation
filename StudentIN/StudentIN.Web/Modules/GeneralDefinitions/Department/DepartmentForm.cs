
namespace StudentIN.GeneralDefinitions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("GeneralDefinitions.Department")]
    [BasedOnRow(typeof(Entities.DepartmentRow))]
    public class DepartmentForm
    {
        public Int32 Code { get; set; }
        public String Name { get; set; }
        public Int32 CityId { get; set; }
        public Int32 TownId { get; set; }
    }
}