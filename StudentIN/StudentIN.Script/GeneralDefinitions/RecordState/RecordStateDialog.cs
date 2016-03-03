
namespace StudentIN.GeneralDefinitions
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty(RecordStateRow.IdProperty), NameProperty(RecordStateRow.NameProperty)]
    [FormKey("GeneralDefinitions.RecordState"), LocalTextPrefix(RecordStateRow.LocalTextPrefix), Service(RecordStateService.BaseUrl)]
    public class RecordStateDialog : EntityDialog<RecordStateRow>
    {
        protected RecordStateForm form;

        public RecordStateDialog()
        {
            form = new RecordStateForm(this.IdPrefix);
        }
    }
}