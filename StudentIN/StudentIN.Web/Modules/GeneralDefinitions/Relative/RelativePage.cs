

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "GeneralDefinitions/Relative", typeof(StudentIN.GeneralDefinitions.Pages.RelativeController))]

namespace StudentIN.GeneralDefinitions.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("GeneralDefinitions/Relative"), Route("{action=index}")]
    public class RelativeController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/GeneralDefinitions/Relative/RelativeIndex.cshtml");
        }
    }
}