
using Serenity.ComponentModel;
using System.ComponentModel;

namespace StudentIN.StudentMain
{
    [EnumKey("StudentMain.Genders")]
    public enum Genders
    {
        [Description("Male")]
        Male = 1,
        [Description("Female")]
        Female = 2
    }
}