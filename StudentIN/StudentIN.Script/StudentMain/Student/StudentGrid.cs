
namespace StudentIN.StudentMain
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("StudentMain.Student"), IdProperty(StudentRow.IdProperty), NameProperty(StudentRow.NameProperty)]
    [DialogType(typeof(StudentDialog)), LocalTextPrefix(StudentRow.LocalTextPrefix), Service(StudentService.BaseUrl)]
    public class StudentGrid : EntityGrid<StudentRow>
    {
        public StudentGrid(jQueryObject container)
            : base(container)
        {
        }
    }
}