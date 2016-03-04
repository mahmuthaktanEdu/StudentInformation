
using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Serenity.ComponentModel
{
    public partial class HtmlBasicContentEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Serenity.HtmlBasicContentEditor";
    
        public HtmlBasicContentEditorAttribute()
            : base(Key)
        {
        }
    
        public Int32 Cols
        {
            get { return GetOption<Int32>("cols"); }
            set { SetOption("cols", value); }
        }
    
        public Int32 Rows
        {
            get { return GetOption<Int32>("rows"); }
            set { SetOption("rows", value); }
        }
    }
}

namespace StudentIN.Administration
{
    public partial class PermissionCheckEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "StudentIN.Administration.PermissionCheckEditor";
    
        public PermissionCheckEditorAttribute()
            : base(Key)
        {
        }
    
        public Boolean ShowRevoke
        {
            get { return GetOption<Boolean>("showRevoke"); }
            set { SetOption("showRevoke", value); }
        }
    }

    public partial class PermissionModuleEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "StudentIN.Administration.PermissionModuleEditor";
    
        public PermissionModuleEditorAttribute()
            : base(Key)
        {
        }
    }

    public partial class RoleCheckEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "StudentIN.Administration.RoleCheckEditor";
    
        public RoleCheckEditorAttribute()
            : base(Key)
        {
        }
    }
}

namespace StudentIN.BasicSamples
{
    public partial class ProduceSeafoodCategoryEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "StudentIN.BasicSamples.ProduceSeafoodCategoryEditor";
    
        public ProduceSeafoodCategoryEditorAttribute()
            : base(Key)
        {
        }
    }
}

namespace StudentIN.GeneralDefinitions
{
    public partial class ConsultantEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "StudentIN.GeneralDefinitions.ConsultantEditor";
    
        public ConsultantEditorAttribute()
            : base(Key)
        {
        }
    
        public String CascadeField
        {
            get { return GetOption<String>("cascadeField"); }
            set { SetOption("cascadeField", value); }
        }
    
        public String CascadeFrom
        {
            get { return GetOption<String>("cascadeFrom"); }
            set { SetOption("cascadeFrom", value); }
        }
    
        public Object CascadeValue
        {
            get { return GetOption<Object>("cascadeValue"); }
            set { SetOption("cascadeValue", value); }
        }
    
        public String FilterField
        {
            get { return GetOption<String>("filterField"); }
            set { SetOption("filterField", value); }
        }
    
        public Object FilterValue
        {
            get { return GetOption<Object>("filterValue"); }
            set { SetOption("filterValue", value); }
        }
    }
}

namespace StudentIN.Membership
{
    public partial class ChangePasswordPanelAttribute : CustomEditorAttribute
    {
        public const string Key = "StudentIN.Membership.ChangePasswordPanel";
    
        public ChangePasswordPanelAttribute()
            : base(Key)
        {
        }
    }

    public partial class ForgotPasswordPanelAttribute : CustomEditorAttribute
    {
        public const string Key = "StudentIN.Membership.ForgotPasswordPanel";
    
        public ForgotPasswordPanelAttribute()
            : base(Key)
        {
        }
    }

    public partial class LoginPanelAttribute : CustomEditorAttribute
    {
        public const string Key = "StudentIN.Membership.LoginPanel";
    
        public LoginPanelAttribute()
            : base(Key)
        {
        }
    }

    public partial class ResetPasswordPanelAttribute : CustomEditorAttribute
    {
        public const string Key = "StudentIN.Membership.ResetPasswordPanel";
    
        public ResetPasswordPanelAttribute()
            : base(Key)
        {
        }
    }

    public partial class SignUpPanelAttribute : CustomEditorAttribute
    {
        public const string Key = "StudentIN.Membership.SignUpPanel";
    
        public SignUpPanelAttribute()
            : base(Key)
        {
        }
    }
}

namespace StudentIN.Northwind
{
    public partial class CustomerEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "StudentIN.Northwind.CustomerEditor";
    
        public CustomerEditorAttribute()
            : base(Key)
        {
        }
    }

    public partial class NotesEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "StudentIN.Northwind.NotesEditor";
    
        public NotesEditorAttribute()
            : base(Key)
        {
        }
    }

    public partial class OrderDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "StudentIN.Northwind.OrderDetailsEditor";
    
        public OrderDetailsEditorAttribute()
            : base(Key)
        {
        }
    }

    public partial class PhoneEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "StudentIN.Northwind.PhoneEditor";
    
        public PhoneEditorAttribute()
            : base(Key)
        {
        }
    
        public Boolean Multiple
        {
            get { return GetOption<Boolean>("multiple"); }
            set { SetOption("multiple", value); }
        }
    }
}

