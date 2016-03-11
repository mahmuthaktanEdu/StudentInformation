
namespace StudentIN.GeneralDefinitions
{

    using jQueryApi;
    using Serenity;

    [Editor]
    public class RecordStateEditor:LookupEditorBase<RecordStateRow>
    {
        public RecordStateEditor(jQueryObject hidden): base (hidden){}
        protected override string GetLookupKey()
        {
            return RecordStateRow.LookupKey;
        }
    }   
}

