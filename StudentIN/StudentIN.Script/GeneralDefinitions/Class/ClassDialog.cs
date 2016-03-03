
namespace StudentIN.GeneralDefinitions
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty(ClassRow.IdProperty), NameProperty(ClassRow.NameProperty)]
    [FormKey("GeneralDefinitions.Class"), LocalTextPrefix(ClassRow.LocalTextPrefix), Service(ClassService.BaseUrl)]
    public class ClassDialog : EntityDialog<ClassRow>
    {
        protected ClassForm form;

        public ClassDialog()
        {
            form = new ClassForm(this.IdPrefix);
        }
    }
}