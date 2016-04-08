
namespace StudentIN.GeneralDefinitions
{

    using jQueryApi;
    using Serenity;

    [Editor]
    public class DiscountTypeEditor : LookupEditorBase<DiscountTypeRow>
    {
        public DiscountTypeEditor(jQueryObject hidden): base (hidden){}
        protected override string GetLookupKey()
        {
            return DiscountTypeRow.LookupKey;
        }
    }   
}

