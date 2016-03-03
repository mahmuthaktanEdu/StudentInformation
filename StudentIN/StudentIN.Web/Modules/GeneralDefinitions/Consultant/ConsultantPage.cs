

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "GeneralDefinitions/Consultant", typeof(StudentIN.GeneralDefinitions.Pages.ConsultantController))]

namespace StudentIN.GeneralDefinitions.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("GeneralDefinitions/Consultant"), Route("{action=index}")]
    public class ConsultantController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/GeneralDefinitions/Consultant/ConsultantIndex.cshtml");
        }
    }
}