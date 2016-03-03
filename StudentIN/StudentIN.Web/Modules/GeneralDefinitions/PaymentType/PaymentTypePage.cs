

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "GeneralDefinitions/PaymentType", typeof(StudentIN.GeneralDefinitions.Pages.PaymentTypeController))]

namespace StudentIN.GeneralDefinitions.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("GeneralDefinitions/PaymentType"), Route("{action=index}")]
    public class PaymentTypeController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/GeneralDefinitions/PaymentType/PaymentTypeIndex.cshtml");
        }
    }
}