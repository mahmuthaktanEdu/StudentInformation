

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "GeneralDefinitions/Department", typeof(StudentIN.GeneralDefinitions.Pages.DepartmentController))]

namespace StudentIN.GeneralDefinitions.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("GeneralDefinitions/Department"), Route("{action=index}")]
    public class DepartmentController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/GeneralDefinitions/Department/DepartmentIndex.cshtml");
        }
    }
}