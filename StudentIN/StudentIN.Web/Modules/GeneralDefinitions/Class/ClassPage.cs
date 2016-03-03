

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "GeneralDefinitions/Class", typeof(StudentIN.GeneralDefinitions.Pages.ClassController))]

namespace StudentIN.GeneralDefinitions.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("GeneralDefinitions/Class"), Route("{action=index}")]
    public class ClassController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/GeneralDefinitions/Class/ClassIndex.cshtml");
        }
    }
}