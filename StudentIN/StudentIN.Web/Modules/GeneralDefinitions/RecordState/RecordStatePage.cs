

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "GeneralDefinitions/RecordState", typeof(StudentIN.GeneralDefinitions.Pages.RecordStateController))]

namespace StudentIN.GeneralDefinitions.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("GeneralDefinitions/RecordState"), Route("{action=index}")]
    public class RecordStateController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/GeneralDefinitions/RecordState/RecordStateIndex.cshtml");
        }
    }
}