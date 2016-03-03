using Serenity;
using System.Html;

namespace StudentIN
{
    public static class ScriptInitialization
    {
        static ScriptInitialization()
        {
            Q.Config.RootNamespaces.Add("StudentIN");
        }
    }
}