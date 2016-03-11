
namespace StudentIN.GeneralDefinitions
{

    using jQueryApi;
    using Serenity;

    [Editor]
    public class SchoolGroupEditor:LookupEditorBase<SchoolGroupRow>
    {
        public SchoolGroupEditor(jQueryObject hidden): base (hidden){}
        protected override string GetLookupKey()
        {
            return SchoolGroupRow.LookupKey;
        }
    }   
}

