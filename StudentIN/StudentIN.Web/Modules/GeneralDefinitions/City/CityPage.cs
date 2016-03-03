

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "GeneralDefinitions/City", typeof(StudentIN.GeneralDefinitions.Pages.CityController))]

namespace StudentIN.GeneralDefinitions.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("GeneralDefinitions/City"), Route("{action=index}")]
    public class CityController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/GeneralDefinitions/City/CityIndex.cshtml");
        }
    }
}