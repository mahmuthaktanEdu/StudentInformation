
namespace StudentIN.GeneralDefinitions
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty(CityRow.IdProperty), NameProperty(CityRow.NameProperty)]
    [FormKey("GeneralDefinitions.City"), LocalTextPrefix(CityRow.LocalTextPrefix), Service(CityService.BaseUrl)]
    public class CityDialog : EntityDialog<CityRow>
    {
        protected CityForm form;

        public CityDialog()
        {
            form = new CityForm(this.IdPrefix);
        }
    }
}