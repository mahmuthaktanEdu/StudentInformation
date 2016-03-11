﻿
namespace StudentIN.GeneralDefinitions
{

    using jQueryApi;
    using Serenity;

    [Editor]
    public class ConsultantEditor:LookupEditorBase<ConsultantRow>
    {
        public ConsultantEditor(jQueryObject hidden): base (hidden){}
        protected override string GetLookupKey()
        {
            return ConsultantRow.LookupKey;
        }
    }   
}

