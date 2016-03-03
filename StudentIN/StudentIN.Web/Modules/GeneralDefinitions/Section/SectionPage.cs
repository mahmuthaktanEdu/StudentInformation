

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "GeneralDefinitions/Section", typeof(StudentIN.GeneralDefinitions.Pages.SectionController))]

namespace StudentIN.GeneralDefinitions.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("GeneralDefinitions/Section"), Route("{action=index}")]
    public class SectionController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/GeneralDefinitions/Section/SectionIndex.cshtml");
        }
    }
}