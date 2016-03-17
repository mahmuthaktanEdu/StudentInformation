
namespace StudentIN.StudentMain
{

    using jQueryApi;
    using Serenity;

    [Editor]
    public class StudentEditor : LookupEditorBase<StudentRow>
    {
        public StudentEditor (jQueryObject hidden): base (hidden){}
        protected override string GetLookupKey()
        {
            return  StudentRow.LookupKey;
        }
    }   
}

