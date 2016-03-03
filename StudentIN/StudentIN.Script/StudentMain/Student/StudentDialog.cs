
namespace StudentIN.StudentMain
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty(StudentRow.IdProperty), NameProperty(StudentRow.NameProperty)]
    [FormKey("StudentMain.Student"), LocalTextPrefix(StudentRow.LocalTextPrefix), Service(StudentService.BaseUrl)]
    public class StudentDialog : EntityDialog<StudentRow>
    {
        protected StudentForm form;

        public StudentDialog()
        {
            form = new StudentForm(this.IdPrefix);
        }
    }
}