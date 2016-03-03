
namespace StudentIN.GeneralDefinitions
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty(SectionRow.IdProperty), NameProperty(SectionRow.NameProperty)]
    [FormKey("GeneralDefinitions.Section"), LocalTextPrefix(SectionRow.LocalTextPrefix), Service(SectionService.BaseUrl)]
    public class SectionDialog : EntityDialog<SectionRow>
    {
        protected SectionForm form;

        public SectionDialog()
        {
            form = new SectionForm(this.IdPrefix);
        }
    }
}