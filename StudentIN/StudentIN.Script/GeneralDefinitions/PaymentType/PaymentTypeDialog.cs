
namespace StudentIN.GeneralDefinitions
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty(PaymentTypeRow.IdProperty), NameProperty(PaymentTypeRow.NameProperty)]
    [FormKey("GeneralDefinitions.PaymentType"), LocalTextPrefix(PaymentTypeRow.LocalTextPrefix), Service(PaymentTypeService.BaseUrl)]
    public class PaymentTypeDialog : EntityDialog<PaymentTypeRow>
    {
        protected PaymentTypeForm form;

        public PaymentTypeDialog()
        {
            form = new PaymentTypeForm(this.IdPrefix);
        }
    }
}