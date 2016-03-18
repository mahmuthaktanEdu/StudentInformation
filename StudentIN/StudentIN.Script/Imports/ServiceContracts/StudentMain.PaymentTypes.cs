
namespace StudentIN.StudentMain
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    [EnumKey("StudentMain.PaymentTypes"), PreserveMemberCase]
    public enum PaymentTypes
    {
        Cash = 0,
        Indenture = 1,
        CreditCard = 2,
        BankTransfer = 3
    }
    
}

