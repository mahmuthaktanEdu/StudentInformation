
namespace StudentIN.StudentMain.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("StudentMain.Student")]
    [BasedOnRow(typeof(Entities.StudentRow))]
    public class StudentForm
    {
        public Int32 DepartmentId { get; set; }
        public Int32 No { get; set; }
        public String Name { get; set; }
        public String Surname { get; set; }
        public String Gender { get; set; }
        public DateTime PreEnrollmentDate { get; set; }
        public DateTime EnrollmentDate { get; set; }
        public String IdentityNumber { get; set; }
        public Int32 GroupPhoto { get; set; }
        public Boolean Photo { get; set; }
        public Boolean Graduated { get; set; }
        public Int32 SectionId { get; set; }
        public Int32 ClassId { get; set; }
        public Int32 SchoolId { get; set; }
        public Int32 ConsultantIId { get; set; }
        public String PostalCode { get; set; }
        public String Phone { get; set; }
        public String MobilePhone { get; set; }
        public String EMail { get; set; }
        public String Address { get; set; }
        public Int32 CityId { get; set; }
        public String ParentName { get; set; }
        public String ParentSurname { get; set; }
        public Int32 ParentOccupationId { get; set; }
        public Int32 RelativeId { get; set; }
        public String ParentMobile { get; set; }
        public String ParentPhone { get; set; }
        public String ParentHomeAddress { get; set; }
        public String ParentPostalCode { get; set; }
        public Int32 ParentCityId { get; set; }
        public String ParentWorkPhone { get; set; }
        public String ParentWorkAddress { get; set; }
        public String ParentWorkPostalCode { get; set; }
        public Int32 ParentWorkCityId { get; set; }
        public String ParentIdentityNumber { get; set; }
        public Boolean IsRecorded { get; set; }
        public DateTime RecordCancelDate { get; set; }
        public Int32 RecordStateId { get; set; }
        public Int32 PaymentTypeId { get; set; }
        public Int32 DiscountUserId { get; set; }
        public String DiscountDescription { get; set; }
        public String CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public String LastModifiedBy { get; set; }
        public DateTime LastModifiedDate { get; set; }
    }
}