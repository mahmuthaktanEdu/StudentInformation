
namespace StudentIN.GeneralDefinitions
{

    using jQueryApi;
    using Serenity;

    [Editor]
    public class PaymentTypeEditor:LookupEditorBase<PaymentTypeRow>
    {
        public PaymentTypeEditor(jQueryObject hidden): base (hidden){}
        protected override string GetLookupKey()
        {
            return PaymentTypeRow.LookupKey;
        }
    }   
}

