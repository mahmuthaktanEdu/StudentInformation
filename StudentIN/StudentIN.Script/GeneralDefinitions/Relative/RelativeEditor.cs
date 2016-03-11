
namespace StudentIN.GeneralDefinitions
{

    using jQueryApi;
    using Serenity;

    [Editor]
    public class RelativeEditor:LookupEditorBase<RelativeRow>
    {
        public RelativeEditor(jQueryObject hidden): base (hidden){}
        protected override string GetLookupKey()
        {
            return RelativeRow.LookupKey;
        }
    }   
}

