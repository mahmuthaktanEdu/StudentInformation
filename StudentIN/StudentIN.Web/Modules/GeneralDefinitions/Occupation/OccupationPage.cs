

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "GeneralDefinitions/Occupation", typeof(StudentIN.GeneralDefinitions.Pages.OccupationController))]

namespace StudentIN.GeneralDefinitions.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("GeneralDefinitions/Occupation"), Route("{action=index}")]
    public class OccupationController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/GeneralDefinitions/Occupation/OccupationIndex.cshtml");
        }
    }
}