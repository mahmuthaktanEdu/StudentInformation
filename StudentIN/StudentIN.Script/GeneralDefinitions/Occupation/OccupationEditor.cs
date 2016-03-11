
namespace StudentIN.GeneralDefinitions
{

    using jQueryApi;
    using Serenity;

    [Editor]
    public class OccupationEditor:LookupEditorBase<OccupationRow>
    {
        public OccupationEditor(jQueryObject hidden): base (hidden){}
        protected override string GetLookupKey()
        {
            return OccupationRow.LookupKey;
        }
    }   
}

