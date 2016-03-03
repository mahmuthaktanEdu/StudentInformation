
namespace StudentIN.GeneralDefinitions
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty(OccupationRow.IdProperty), NameProperty(OccupationRow.NameProperty)]
    [FormKey("GeneralDefinitions.Occupation"), LocalTextPrefix(OccupationRow.LocalTextPrefix), Service(OccupationService.BaseUrl)]
    public class OccupationDialog : EntityDialog<OccupationRow>
    {
        protected OccupationForm form;

        public OccupationDialog()
        {
            form = new OccupationForm(this.IdPrefix);
        }
    }
}