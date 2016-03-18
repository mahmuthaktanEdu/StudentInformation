
namespace StudentIN.StudentMain
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using System.ComponentModel;

    [EnumKey("StudentMain.PaymentTypes")]
    public enum PaymentTypes
    {
        [Description("Cash")]
        Cash = 0,
        [Description("Indenture")]
        Indenture = 1,
        [Description("CreditCard")]
        CreditCard = 2,
        [Description("BankTransfer")]
        BankTransfer = 3
     }
}