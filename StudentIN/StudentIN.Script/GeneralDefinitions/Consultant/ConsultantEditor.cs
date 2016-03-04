
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



//namespace Marmara.Ogrenci
//{
//    using jQueryApi;
//    using Serenity;

//    [Editor]
//    public class OgrenciOlayEditor : LookupEditorBase<OgrenciOlayRow>
//    {
//        public OgrenciOlayEditor(jQueryObject hidden)
//            : base(hidden)
//        {
//        }

//        protected override string GetItemText(OgrenciOlayRow item, Lookup<OgrenciOlayRow> lookup)
//        {

//            string text = item.OlayNo + " - " + item.OlayKonusu;
//            return text;
//        }

//        protected override string GetLookupKey()
//        {
//            return OgrenciOlayRow.LookupKey;
//        }
//    }
//}
