

 
namespace StudentIN.StudentMain.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("StudentMain/Student"), Route("{action=index}")]
    public class StudentController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/StudentMain/Student/StudentIndex.cshtml");
        }
    }
}