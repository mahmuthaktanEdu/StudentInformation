
namespace StudentIN.StudentMain
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    [Imported, Serializable, PreserveMemberCase]
    public partial class StudentRow
    {
        [InlineConstant] public const string IdProperty = "Id";
        [InlineConstant] public const string NameProperty = "Name";
        [InlineConstant] public const string LocalTextPrefix = "StudentMain.Student";
    
        public Int32? Id { get; set; }
        public Int32? DepartmentId { get; set; }
        public Int32? No { get; set; }
        public String Name { get; set; }
        public String Surname { get; set; }
        public String Gender { get; set; }
        public String PreEnrollmentDate { get; set; }
        public String EnrollmentDate { get; set; }
        public String IdentityNumber { get; set; }
        public Int32? GroupPhoto { get; set; }
        public Boolean? Photo { get; set; }
        public Boolean? Graduated { get; set; }
        public Int32? SectionId { get; set; }
        public Int32? ClassId { get; set; }
        public Int32? SchoolId { get; set; }
        public Int32? ConsultantIId { get; set; }
        public String PostalCode { get; set; }
        public String Phone { get; set; }
        public String MobilePhone { get; set; }
        public String EMail { get; set; }
        public String Address { get; set; }
        public Int32? CityId { get; set; }
        public String ParentName { get; set; }
        public String ParentSurname { get; set; }
        public Int32? ParentOccupationId { get; set; }
        public Int32? RelativeId { get; set; }
        public String ParentMobile { get; set; }
        public String ParentPhone { get; set; }
        public String ParentHomeAddress { get; set; }
        public String ParentPostalCode { get; set; }
        public Int32? ParentCityId { get; set; }
        public String ParentWorkPhone { get; set; }
        public String ParentWorkAddress { get; set; }
        public String ParentWorkPostalCode { get; set; }
        public Int32? ParentWorkCityId { get; set; }
        public String ParentIdentityNumber { get; set; }
        public Boolean? IsRecorded { get; set; }
        public String RecordCancelDate { get; set; }
        public Int32? RecordStateId { get; set; }
        public Int32? PaymentTypeId { get; set; }
        public Int32? DiscountUserId { get; set; }
        public String DiscountDescription { get; set; }
        public String CreatedBy { get; set; }
        public String CreatedDate { get; set; }
        public String LastModifiedBy { get; set; }
        public String LastModifiedDate { get; set; }
        public Int32? DepartmentCode { get; set; }
        public String DepartmentName { get; set; }
        public Int32? DepartmentCityId { get; set; }
        public Int32? DepartmentTownId { get; set; }
        public String SectionName { get; set; }
        public Int32? ClassDepartmentId { get; set; }
        public String ClassClassCode { get; set; }
        public String ClassSessionName { get; set; }
        public String ClassName { get; set; }
        public Int32? SchoolDepartmentId { get; set; }
        public String SchoolCode { get; set; }
        public String SchoolName { get; set; }
        public Int32? SchoolSchoolGroupId { get; set; }
        public Int32? ConsultantIDepartmentId { get; set; }
        public String ConsultantIName { get; set; }
        public String ParentOccupationName { get; set; }
        public String RelativeName { get; set; }
        public String ParentCityName { get; set; }
        public String ParentWorkCityName { get; set; }
        public String RecordStateName { get; set; }
        public String PaymentTypeName { get; set; }
        public Decimal? PaymentTypePaymentAmount { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string Id = "Id";
            [InlineConstant] public const string DepartmentId = "DepartmentId";
            [InlineConstant] public const string No = "No";
            [InlineConstant] public const string Name = "Name";
            [InlineConstant] public const string Surname = "Surname";
            [InlineConstant] public const string Gender = "Gender";
            [InlineConstant] public const string PreEnrollmentDate = "PreEnrollmentDate";
            [InlineConstant] public const string EnrollmentDate = "EnrollmentDate";
            [InlineConstant] public const string IdentityNumber = "IdentityNumber";
            [InlineConstant] public const string GroupPhoto = "GroupPhoto";
            [InlineConstant] public const string Photo = "Photo";
            [InlineConstant] public const string Graduated = "Graduated";
            [InlineConstant] public const string SectionId = "SectionId";
            [InlineConstant] public const string ClassId = "ClassId";
            [InlineConstant] public const string SchoolId = "SchoolId";
            [InlineConstant] public const string ConsultantIId = "ConsultantIId";
            [InlineConstant] public const string PostalCode = "PostalCode";
            [InlineConstant] public const string Phone = "Phone";
            [InlineConstant] public const string MobilePhone = "MobilePhone";
            [InlineConstant] public const string EMail = "EMail";
            [InlineConstant] public const string Address = "Address";
            [InlineConstant] public const string CityId = "CityId";
            [InlineConstant] public const string ParentName = "ParentName";
            [InlineConstant] public const string ParentSurname = "ParentSurname";
            [InlineConstant] public const string ParentOccupationId = "ParentOccupationId";
            [InlineConstant] public const string RelativeId = "RelativeId";
            [InlineConstant] public const string ParentMobile = "ParentMobile";
            [InlineConstant] public const string ParentPhone = "ParentPhone";
            [InlineConstant] public const string ParentHomeAddress = "ParentHomeAddress";
            [InlineConstant] public const string ParentPostalCode = "ParentPostalCode";
            [InlineConstant] public const string ParentCityId = "ParentCityId";
            [InlineConstant] public const string ParentWorkPhone = "ParentWorkPhone";
            [InlineConstant] public const string ParentWorkAddress = "ParentWorkAddress";
            [InlineConstant] public const string ParentWorkPostalCode = "ParentWorkPostalCode";
            [InlineConstant] public const string ParentWorkCityId = "ParentWorkCityId";
            [InlineConstant] public const string ParentIdentityNumber = "ParentIdentityNumber";
            [InlineConstant] public const string IsRecorded = "IsRecorded";
            [InlineConstant] public const string RecordCancelDate = "RecordCancelDate";
            [InlineConstant] public const string RecordStateId = "RecordStateId";
            [InlineConstant] public const string PaymentTypeId = "PaymentTypeId";
            [InlineConstant] public const string DiscountUserId = "DiscountUserId";
            [InlineConstant] public const string DiscountDescription = "DiscountDescription";
            [InlineConstant] public const string CreatedBy = "CreatedBy";
            [InlineConstant] public const string CreatedDate = "CreatedDate";
            [InlineConstant] public const string LastModifiedBy = "LastModifiedBy";
            [InlineConstant] public const string LastModifiedDate = "LastModifiedDate";
            [InlineConstant] public const string DepartmentCode = "DepartmentCode";
            [InlineConstant] public const string DepartmentName = "DepartmentName";
            [InlineConstant] public const string DepartmentCityId = "DepartmentCityId";
            [InlineConstant] public const string DepartmentTownId = "DepartmentTownId";
            [InlineConstant] public const string SectionName = "SectionName";
            [InlineConstant] public const string ClassDepartmentId = "ClassDepartmentId";
            [InlineConstant] public const string ClassClassCode = "ClassClassCode";
            [InlineConstant] public const string ClassSessionName = "ClassSessionName";
            [InlineConstant] public const string ClassName = "ClassName";
            [InlineConstant] public const string SchoolDepartmentId = "SchoolDepartmentId";
            [InlineConstant] public const string SchoolCode = "SchoolCode";
            [InlineConstant] public const string SchoolName = "SchoolName";
            [InlineConstant] public const string SchoolSchoolGroupId = "SchoolSchoolGroupId";
            [InlineConstant] public const string ConsultantIDepartmentId = "ConsultantIDepartmentId";
            [InlineConstant] public const string ConsultantIName = "ConsultantIName";
            [InlineConstant] public const string ParentOccupationName = "ParentOccupationName";
            [InlineConstant] public const string RelativeName = "RelativeName";
            [InlineConstant] public const string ParentCityName = "ParentCityName";
            [InlineConstant] public const string ParentWorkCityName = "ParentWorkCityName";
            [InlineConstant] public const string RecordStateName = "RecordStateName";
            [InlineConstant] public const string PaymentTypeName = "PaymentTypeName";
            [InlineConstant] public const string PaymentTypePaymentAmount = "PaymentTypePaymentAmount";
        }
    }
    
}

