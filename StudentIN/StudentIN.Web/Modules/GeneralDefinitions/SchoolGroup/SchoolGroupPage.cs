

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "GeneralDefinitions/SchoolGroup", typeof(StudentIN.GeneralDefinitions.Pages.SchoolGroupController))]

namespace StudentIN.GeneralDefinitions.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("GeneralDefinitions/SchoolGroup"), Route("{action=index}")]
    public class SchoolGroupController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/GeneralDefinitions/SchoolGroup/SchoolGroupIndex.cshtml");
        }
    }
}