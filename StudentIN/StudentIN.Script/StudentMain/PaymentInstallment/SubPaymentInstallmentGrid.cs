﻿
namespace StudentIN.StudentMain
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [Element("<div/>"), Editor]
    
    public class SubPaymentInstallmentGrid : PaymentInstallmentGrid
    {
        public SubPaymentInstallmentGrid(jQueryObject container)
            : base(container)
        {
        }
        private Int32? studentId;
        public Int32? StudentId
        {
            get { return studentId; }
            set
            {
                if (studentId != value)
                {
                    studentId = value;
                    Refresh();
                }
            }
        }

        protected override string GetInitialTitle()
        {
            return null;
        }

        protected override bool GetGridCanLoad()
        {
            return base.GetGridCanLoad() && studentId != null;
        }

        protected override void InitEntityDialog(string itemType, Widget dialog)
        {
            base.InitEntityDialog(itemType, dialog);
            Serenity.SubDialogHelper.Cascade((PaymentInstallmentDialog)dialog, this.Element.Closest(".ui-dialog"));
        }

        protected override void AddButtonClick()
        {
            EditItem(new PaymentInstallmentRow
            {
                StudentId = StudentId
            });
        }

        protected override bool OnViewSubmit()
        {
            if (!base.OnViewSubmit())
                return false;

            var request = ((ListRequest)view.Params);
            request.EqualityFilter = request.EqualityFilter ?? new JsDictionary<string, object>();

            if (studentId != null)
                request.EqualityFilter[PaymentInstallmentRow.Fields.StudentId] = StudentId.Value;

            return true;
        }
        protected override Widget CreateEntityDialog(string itemType, Action<Widget> callback)
        {
            var dialog = base.CreateEntityDialog(itemType, callback);

            if (itemType == GetItemType())
                dialog.As<PaymentInstallmentDialog>().StudentId = this.StudentId.Value;

            return dialog;
        }

    }
}