
namespace StudentIN.GeneralDefinitions
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty(ConsultantRow.IdProperty), NameProperty(ConsultantRow.NameProperty)]
    [FormKey("GeneralDefinitions.Consultant"), LocalTextPrefix(ConsultantRow.LocalTextPrefix), Service(ConsultantService.BaseUrl)]
    public class ConsultantDialog : EntityDialog<ConsultantRow>
    {
        protected ConsultantForm form;

        public ConsultantDialog()
        {
            form = new ConsultantForm(this.IdPrefix);
        }
    }
}