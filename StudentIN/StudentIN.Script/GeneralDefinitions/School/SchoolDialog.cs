
namespace StudentIN.GeneralDefinitions
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty(SchoolRow.IdProperty), NameProperty(SchoolRow.NameProperty)]
    [FormKey("GeneralDefinitions.School"), LocalTextPrefix(SchoolRow.LocalTextPrefix), Service(SchoolService.BaseUrl)]
    public class SchoolDialog : EntityDialog<SchoolRow>
    {
        protected SchoolForm form;

        public SchoolDialog()
        {
            form = new SchoolForm(this.IdPrefix);
        }
    }
}