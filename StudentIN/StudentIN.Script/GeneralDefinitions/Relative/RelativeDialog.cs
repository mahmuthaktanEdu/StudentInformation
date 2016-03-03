
namespace StudentIN.GeneralDefinitions
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty(RelativeRow.IdProperty), NameProperty(RelativeRow.NameProperty)]
    [FormKey("GeneralDefinitions.Relative"), LocalTextPrefix(RelativeRow.LocalTextPrefix), Service(RelativeService.BaseUrl)]
    public class RelativeDialog : EntityDialog<RelativeRow>
    {
        protected RelativeForm form;

        public RelativeDialog()
        {
            form = new RelativeForm(this.IdPrefix);
        }
    }
}