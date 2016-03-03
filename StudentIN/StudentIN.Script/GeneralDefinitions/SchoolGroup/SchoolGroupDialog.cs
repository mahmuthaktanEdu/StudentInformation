
namespace StudentIN.GeneralDefinitions
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty(SchoolGroupRow.IdProperty), NameProperty(SchoolGroupRow.NameProperty)]
    [FormKey("GeneralDefinitions.SchoolGroup"), LocalTextPrefix(SchoolGroupRow.LocalTextPrefix), Service(SchoolGroupService.BaseUrl)]
    public class SchoolGroupDialog : EntityDialog<SchoolGroupRow>
    {
        protected SchoolGroupForm form;

        public SchoolGroupDialog()
        {
            form = new SchoolGroupForm(this.IdPrefix);
        }
    }
}