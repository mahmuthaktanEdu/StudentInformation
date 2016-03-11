
namespace StudentIN.StudentMain
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty(StudentRow.IdProperty), NameProperty(StudentRow.NameProperty), Flexify, Maximizable]
    [FormKey(StudentForm.FormKey), LocalTextPrefix(StudentRow.LocalTextPrefix), Service(StudentService.BaseUrl)] 

    public class StudentDialog : EntityDialog<StudentRow>
    {
        private SubPaymentGrid gridPayment;
        private SubPaymentInstallmentGrid gridPaymentInstallment;
        private SubStudentDiscountGrid gridStudentDiscount;
        private SubInvoiceInformationGrid gridInvoiceInformation;
        protected StudentForm form;        
        public StudentDialog()
        {
            gridPayment = new SubPaymentGrid(ById("PaymentGrid"));
            gridPaymentInstallment = new SubPaymentInstallmentGrid(ById("PaymentInstallmentGrid"));
            gridStudentDiscount = new SubStudentDiscountGrid(ById("StudentDiscountGrid"));
            gridInvoiceInformation = new SubInvoiceInformationGrid(ById("InvoiceInformationGrid"));

            form = new StudentForm(idPrefix);

            tabs.OnActivate += (e, i) => this.Arrange();

            InitializeFormFlexify();
        }

        protected override void LoadEntity(StudentRow entity)
        {
            base.LoadEntity(entity);

            tabs.SetDisabled("Payment", this.IsNewOrDeleted);
            tabs.SetDisabled("PaymentInstallment", this.IsNewOrDeleted);


            gridPayment.StudentId = this.EntityId.As<int?>();
            gridPaymentInstallment.StudentId = this.EntityId.As<int?>();
            gridPaymentInstallment.StudentId = this.EntityId.As<int?>();
            gridStudentDiscount.StudentId = this.EntityId.As<int?>();
            gridInvoiceInformation.StudentId = this.EntityId.As<int?>();

            //if (IsNew)
            //    form..Value = OlayDurumu.YeniOlay.ToString();
        }

        private void InitializeFormFlexify()
        {
            this.Element.Find(".categories");
            ById("PaymentGrid").Height(470).Width(700);
            ById("PaymentInstallmentGrid").Height(470).Width(700);
            ById("StudentDiscountGrid").Height(470).Width(700);
            ById("InvoiceInformationGrid").Height(470).Width(700);
        }

    }
}


