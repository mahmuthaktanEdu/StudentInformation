
namespace StudentIN.GeneralDefinitions
{

    using jQueryApi;
    using Serenity;

    [Editor]
    public class SectionEditor:LookupEditorBase<SectionRow>
    {
        public SectionEditor(jQueryObject hidden): base (hidden){}
        protected override string GetLookupKey()
        {
            return SectionRow.LookupKey;
        }
    }   
}

