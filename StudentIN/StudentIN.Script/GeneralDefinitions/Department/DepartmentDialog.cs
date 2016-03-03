
namespace StudentIN.GeneralDefinitions
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty(DepartmentRow.IdProperty), NameProperty(DepartmentRow.NameProperty)]
    [FormKey("GeneralDefinitions.Department"), LocalTextPrefix(DepartmentRow.LocalTextPrefix), Service(DepartmentService.BaseUrl)]
    public class DepartmentDialog : EntityDialog<DepartmentRow>
    {
        protected DepartmentForm form;

        public DepartmentDialog()
        {
            form = new DepartmentForm(this.IdPrefix);
        }
    }
}