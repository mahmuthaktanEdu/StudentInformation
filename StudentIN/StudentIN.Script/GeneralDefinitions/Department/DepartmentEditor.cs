
namespace StudentIN.GeneralDefinitions
{

    using jQueryApi;
    using Serenity;

    [Editor]
    public class DepartmentEditor:LookupEditorBase<DepartmentRow>
    {
        public DepartmentEditor(jQueryObject hidden): base (hidden){}
        protected override string GetLookupKey()
        {
            return DepartmentRow.LookupKey;
        }
    }   
}

