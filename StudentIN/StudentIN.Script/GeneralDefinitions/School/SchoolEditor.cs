
namespace StudentIN.GeneralDefinitions
{

    using jQueryApi;
    using Serenity;

    [Editor]
    public class SchoolEditor:LookupEditorBase<SchoolRow>
    {
        public SchoolEditor(jQueryObject hidden): base (hidden){}
        protected override string GetLookupKey()
        {
            return SchoolRow.LookupKey;
        }
    }   
}

