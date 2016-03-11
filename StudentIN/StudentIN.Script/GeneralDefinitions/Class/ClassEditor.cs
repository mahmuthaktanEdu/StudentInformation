
namespace StudentIN.GeneralDefinitions
{

    using jQueryApi;
    using Serenity;

    [Editor]
    public class ClassEditor:LookupEditorBase<ClassRow>
    {
        public ClassEditor(jQueryObject hidden): base (hidden){}
        protected override string GetLookupKey()
        {
            return ClassRow.LookupKey;
        }
        protected override string GetItemText(ClassRow item, Lookup<ClassRow> lookup)
        {             
            string text = item.Name + " - " + item.SessionName;
            return text;
        }
    }   
}

