
namespace StudentIN.StudentMain.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Entities;
    [ColumnsScript("StudentMain.Student")]
    [BasedOnRow(typeof(Entities.StudentRow))]
    public class StudentColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [Category("Temel Bilgiler")]
        [Width(80)]
        public String DepartmentName { get; set; }
        public Int32 No { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Surname { get; set; }
        public Genders Gender { get; set; }
        public DateTime PreEnrollmentDate { get; set; }
        public DateTime EnrollmentDate { get; set; }
        public String IdentityNumber { get; set; }

        public String RecordStateName { get; set; }
        public String PaymentTypeName { get; set; }
        public String ConsultantIName { get; set; }

        public String SectionName { get; set; }
        public String ClassName { get; set; }
        public String SchoolName { get; set; }
        public Boolean Graduated { get; set; }
        public Boolean Photo { get; set; }

        public Int32 GroupPhoto { get; set; }

        public String MobilePhone { get; set; }
        public String PostalCode { get; set; }
        public String Phone { get; set; }
        public String EMail { get; set; }
        public String Address { get; set; }
        public String CityName { get; set; }

        [Category("Kayıt Bilgileri")]

        public Boolean IsRecorded { get; set; }
        public DateTime RecordCancelDate { get; set; }
        public Int32 DiscountUserId { get; set; }
        public String DiscountDescription { get; set; } 

        [Category("Veli Bilgileri")]
        public String ParentName { get; set; }
        public String ParentSurname { get; set; }
        public String RelativeName { get; set; }
        public String ParentOccupationName { get; set; }

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

    }
}