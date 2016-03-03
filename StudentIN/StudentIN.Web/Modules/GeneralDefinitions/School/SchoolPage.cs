

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "GeneralDefinitions/School", typeof(StudentIN.GeneralDefinitions.Pages.SchoolController))]

namespace StudentIN.GeneralDefinitions.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("GeneralDefinitions/School"), Route("{action=index}")]
    public class SchoolController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/GeneralDefinitions/School/SchoolIndex.cshtml");
        }
    }
}