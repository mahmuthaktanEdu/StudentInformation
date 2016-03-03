
namespace StudentIN.StudentMain.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("Student"), InstanceName("Student"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class StudentRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Department"), NotNull, ForeignKey("[dbo].[Department]", "ID"), LeftJoin("jDepartment"), TextualField("DepartmentName")]
        public Int32? DepartmentId
        {
            get { return Fields.DepartmentId[this]; }
            set { Fields.DepartmentId[this] = value; }
        }

        [DisplayName("No"), NotNull]
        public Int32? No
        {
            get { return Fields.No[this]; }
            set { Fields.No[this] = value; }
        }

        [DisplayName("Name"), Size(40), QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Surname"), Size(40)]
        public String Surname
        {
            get { return Fields.Surname[this]; }
            set { Fields.Surname[this] = value; }
        }

        [DisplayName("Gender"), Size(10)]
        public String Gender
        {
            get { return Fields.Gender[this]; }
            set { Fields.Gender[this] = value; }
        }

        [DisplayName("Pre Enrollment Date")]
        public DateTime? PreEnrollmentDate
        {
            get { return Fields.PreEnrollmentDate[this]; }
            set { Fields.PreEnrollmentDate[this] = value; }
        }

        [DisplayName("Enrollment Date")]
        public DateTime? EnrollmentDate
        {
            get { return Fields.EnrollmentDate[this]; }
            set { Fields.EnrollmentDate[this] = value; }
        }

        [DisplayName("Identity Number"), Size(15)]
        public String IdentityNumber
        {
            get { return Fields.IdentityNumber[this]; }
            set { Fields.IdentityNumber[this] = value; }
        }

        [DisplayName("Group Photo")]
        public Int32? GroupPhoto
        {
            get { return Fields.GroupPhoto[this]; }
            set { Fields.GroupPhoto[this] = value; }
        }

        [DisplayName("Photo")]
        public Boolean? Photo
        {
            get { return Fields.Photo[this]; }
            set { Fields.Photo[this] = value; }
        }

        [DisplayName("Graduated")]
        public Boolean? Graduated
        {
            get { return Fields.Graduated[this]; }
            set { Fields.Graduated[this] = value; }
        }

        [DisplayName("Section"), ForeignKey("[dbo].[Section]", "ID"), LeftJoin("jSection"), TextualField("SectionName")]
        public Int32? SectionId
        {
            get { return Fields.SectionId[this]; }
            set { Fields.SectionId[this] = value; }
        }

        [DisplayName("Class"), ForeignKey("[dbo].[Class]", "ID"), LeftJoin("jClass"), TextualField("ClassClassCode")]
        public Int32? ClassId
        {
            get { return Fields.ClassId[this]; }
            set { Fields.ClassId[this] = value; }
        }

        [DisplayName("School"), ForeignKey("[dbo].[School]", "ID"), LeftJoin("jSchool"), TextualField("SchoolCode")]
        public Int32? SchoolId
        {
            get { return Fields.SchoolId[this]; }
            set { Fields.SchoolId[this] = value; }
        }

        [DisplayName("Consultant I"), ForeignKey("[dbo].[Consultant]", "ID"), LeftJoin("jConsultantI"), TextualField("ConsultantIName")]
        public Int32? ConsultantIId
        {
            get { return Fields.ConsultantIId[this]; }
            set { Fields.ConsultantIId[this] = value; }
        }

        [DisplayName("Postal Code"), Size(5)]
        public String PostalCode
        {
            get { return Fields.PostalCode[this]; }
            set { Fields.PostalCode[this] = value; }
        }

        [DisplayName("Phone"), Size(25)]
        public String Phone
        {
            get { return Fields.Phone[this]; }
            set { Fields.Phone[this] = value; }
        }

        [DisplayName("Mobile Phone"), Size(25)]
        public String MobilePhone
        {
            get { return Fields.MobilePhone[this]; }
            set { Fields.MobilePhone[this] = value; }
        }

        [DisplayName("E Mail"), Size(75)]
        public String EMail
        {
            get { return Fields.EMail[this]; }
            set { Fields.EMail[this] = value; }
        }

        [DisplayName("Address"), Size(150)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("City Id")]
        public Int32? CityId
        {
            get { return Fields.CityId[this]; }
            set { Fields.CityId[this] = value; }
        }

        [DisplayName("Parent Name"), Size(50)]
        public String ParentName
        {
            get { return Fields.ParentName[this]; }
            set { Fields.ParentName[this] = value; }
        }

        [DisplayName("Parent Surname"), Size(50)]
        public String ParentSurname
        {
            get { return Fields.ParentSurname[this]; }
            set { Fields.ParentSurname[this] = value; }
        }

        [DisplayName("Parent Occupation"), ForeignKey("[dbo].[Occupation]", "ID"), LeftJoin("jParentOccupation"), TextualField("ParentOccupationName")]
        public Int32? ParentOccupationId
        {
            get { return Fields.ParentOccupationId[this]; }
            set { Fields.ParentOccupationId[this] = value; }
        }

        [DisplayName("Relative"), ForeignKey("[dbo].[Relative]", "ID"), LeftJoin("jRelative"), TextualField("RelativeName")]
        public Int32? RelativeId
        {
            get { return Fields.RelativeId[this]; }
            set { Fields.RelativeId[this] = value; }
        }

        [DisplayName("Parent Mobile"), Size(25)]
        public String ParentMobile
        {
            get { return Fields.ParentMobile[this]; }
            set { Fields.ParentMobile[this] = value; }
        }

        [DisplayName("Parent Phone"), Size(25)]
        public String ParentPhone
        {
            get { return Fields.ParentPhone[this]; }
            set { Fields.ParentPhone[this] = value; }
        }

        [DisplayName("Parent Home Address"), Size(150)]
        public String ParentHomeAddress
        {
            get { return Fields.ParentHomeAddress[this]; }
            set { Fields.ParentHomeAddress[this] = value; }
        }

        [DisplayName("Parent Postal Code"), Size(5)]
        public String ParentPostalCode
        {
            get { return Fields.ParentPostalCode[this]; }
            set { Fields.ParentPostalCode[this] = value; }
        }

        [DisplayName("Parent City"), ForeignKey("[dbo].[City]", "ID"), LeftJoin("jParentCity"), TextualField("ParentCityName")]
        public Int32? ParentCityId
        {
            get { return Fields.ParentCityId[this]; }
            set { Fields.ParentCityId[this] = value; }
        }

        [DisplayName("Parent Work Phone"), Size(25)]
        public String ParentWorkPhone
        {
            get { return Fields.ParentWorkPhone[this]; }
            set { Fields.ParentWorkPhone[this] = value; }
        }

        [DisplayName("Parent Work Address"), Size(150)]
        public String ParentWorkAddress
        {
            get { return Fields.ParentWorkAddress[this]; }
            set { Fields.ParentWorkAddress[this] = value; }
        }

        [DisplayName("Parent Work Postal Code"), Size(5)]
        public String ParentWorkPostalCode
        {
            get { return Fields.ParentWorkPostalCode[this]; }
            set { Fields.ParentWorkPostalCode[this] = value; }
        }

        [DisplayName("Parent Work City"), ForeignKey("[dbo].[City]", "ID"), LeftJoin("jParentWorkCity"), TextualField("ParentWorkCityName")]
        public Int32? ParentWorkCityId
        {
            get { return Fields.ParentWorkCityId[this]; }
            set { Fields.ParentWorkCityId[this] = value; }
        }

        [DisplayName("Parent Identity Number"), Size(50)]
        public String ParentIdentityNumber
        {
            get { return Fields.ParentIdentityNumber[this]; }
            set { Fields.ParentIdentityNumber[this] = value; }
        }

        [DisplayName("Is Recorded")]
        public Boolean? IsRecorded
        {
            get { return Fields.IsRecorded[this]; }
            set { Fields.IsRecorded[this] = value; }
        }

        [DisplayName("Record Cancel Date")]
        public DateTime? RecordCancelDate
        {
            get { return Fields.RecordCancelDate[this]; }
            set { Fields.RecordCancelDate[this] = value; }
        }

        [DisplayName("Record State"), ForeignKey("[dbo].[RecordState]", "ID"), LeftJoin("jRecordState"), TextualField("RecordStateName")]
        public Int32? RecordStateId
        {
            get { return Fields.RecordStateId[this]; }
            set { Fields.RecordStateId[this] = value; }
        }

        [DisplayName("Payment Type"), ForeignKey("[dbo].[PaymentType]", "ID"), LeftJoin("jPaymentType"), TextualField("PaymentTypeName")]
        public Int32? PaymentTypeId
        {
            get { return Fields.PaymentTypeId[this]; }
            set { Fields.PaymentTypeId[this] = value; }
        }

        [DisplayName("Discount User Id")]
        public Int32? DiscountUserId
        {
            get { return Fields.DiscountUserId[this]; }
            set { Fields.DiscountUserId[this] = value; }
        }

        [DisplayName("Discount Description"), Size(300)]
        public String DiscountDescription
        {
            get { return Fields.DiscountDescription[this]; }
            set { Fields.DiscountDescription[this] = value; }
        }

        [DisplayName("Created By"), Size(20)]
        public String CreatedBy
        {
            get { return Fields.CreatedBy[this]; }
            set { Fields.CreatedBy[this] = value; }
        }

        [DisplayName("Created Date")]
        public DateTime? CreatedDate
        {
            get { return Fields.CreatedDate[this]; }
            set { Fields.CreatedDate[this] = value; }
        }

        [DisplayName("Last Modified By"), Size(20)]
        public String LastModifiedBy
        {
            get { return Fields.LastModifiedBy[this]; }
            set { Fields.LastModifiedBy[this] = value; }
        }

        [DisplayName("Last Modified Date")]
        public DateTime? LastModifiedDate
        {
            get { return Fields.LastModifiedDate[this]; }
            set { Fields.LastModifiedDate[this] = value; }
        }

        [DisplayName("Department Code"), Expression("jDepartment.[Code]")]
        public Int32? DepartmentCode
        {
            get { return Fields.DepartmentCode[this]; }
            set { Fields.DepartmentCode[this] = value; }
        }

        [DisplayName("Department Name"), Expression("jDepartment.[Name]")]
        public String DepartmentName
        {
            get { return Fields.DepartmentName[this]; }
            set { Fields.DepartmentName[this] = value; }
        }

        [DisplayName("Department City Id"), Expression("jDepartment.[CityId]")]
        public Int32? DepartmentCityId
        {
            get { return Fields.DepartmentCityId[this]; }
            set { Fields.DepartmentCityId[this] = value; }
        }

        [DisplayName("Department Town Id"), Expression("jDepartment.[TownId]")]
        public Int32? DepartmentTownId
        {
            get { return Fields.DepartmentTownId[this]; }
            set { Fields.DepartmentTownId[this] = value; }
        }

        [DisplayName("Section Name"), Expression("jSection.[Name]")]
        public String SectionName
        {
            get { return Fields.SectionName[this]; }
            set { Fields.SectionName[this] = value; }
        }

        [DisplayName("Class Department Id"), Expression("jClass.[DepartmentId]")]
        public Int32? ClassDepartmentId
        {
            get { return Fields.ClassDepartmentId[this]; }
            set { Fields.ClassDepartmentId[this] = value; }
        }

        [DisplayName("Class Class Code"), Expression("jClass.[ClassCode]")]
        public String ClassClassCode
        {
            get { return Fields.ClassClassCode[this]; }
            set { Fields.ClassClassCode[this] = value; }
        }

        [DisplayName("Class Session Name"), Expression("jClass.[SessionName]")]
        public String ClassSessionName
        {
            get { return Fields.ClassSessionName[this]; }
            set { Fields.ClassSessionName[this] = value; }
        }

        [DisplayName("Class Name"), Expression("jClass.[Name]")]
        public String ClassName
        {
            get { return Fields.ClassName[this]; }
            set { Fields.ClassName[this] = value; }
        }

        [DisplayName("School Department Id"), Expression("jSchool.[DepartmentId]")]
        public Int32? SchoolDepartmentId
        {
            get { return Fields.SchoolDepartmentId[this]; }
            set { Fields.SchoolDepartmentId[this] = value; }
        }

        [DisplayName("School Code"), Expression("jSchool.[code]")]
        public String SchoolCode
        {
            get { return Fields.SchoolCode[this]; }
            set { Fields.SchoolCode[this] = value; }
        }

        [DisplayName("School Name"), Expression("jSchool.[Name]")]
        public String SchoolName
        {
            get { return Fields.SchoolName[this]; }
            set { Fields.SchoolName[this] = value; }
        }

        [DisplayName("School School Group Id"), Expression("jSchool.[SchoolGroupId]")]
        public Int32? SchoolSchoolGroupId
        {
            get { return Fields.SchoolSchoolGroupId[this]; }
            set { Fields.SchoolSchoolGroupId[this] = value; }
        }

        [DisplayName("Consultant I Department Id"), Expression("jConsultantI.[DepartmentId]")]
        public Int32? ConsultantIDepartmentId
        {
            get { return Fields.ConsultantIDepartmentId[this]; }
            set { Fields.ConsultantIDepartmentId[this] = value; }
        }

        [DisplayName("Consultant I Name"), Expression("jConsultantI.[Name]")]
        public String ConsultantIName
        {
            get { return Fields.ConsultantIName[this]; }
            set { Fields.ConsultantIName[this] = value; }
        }

        [DisplayName("Parent Occupation Name"), Expression("jParentOccupation.[Name]")]
        public String ParentOccupationName
        {
            get { return Fields.ParentOccupationName[this]; }
            set { Fields.ParentOccupationName[this] = value; }
        }

        [DisplayName("Relative Name"), Expression("jRelative.[Name]")]
        public String RelativeName
        {
            get { return Fields.RelativeName[this]; }
            set { Fields.RelativeName[this] = value; }
        }

        [DisplayName("Parent City Name"), Expression("jParentCity.[Name]")]
        public String ParentCityName
        {
            get { return Fields.ParentCityName[this]; }
            set { Fields.ParentCityName[this] = value; }
        }

        [DisplayName("Parent Work City Name"), Expression("jParentWorkCity.[Name]")]
        public String ParentWorkCityName
        {
            get { return Fields.ParentWorkCityName[this]; }
            set { Fields.ParentWorkCityName[this] = value; }
        }

        [DisplayName("Record State Name"), Expression("jRecordState.[Name]")]
        public String RecordStateName
        {
            get { return Fields.RecordStateName[this]; }
            set { Fields.RecordStateName[this] = value; }
        }

        [DisplayName("Payment Type Name"), Expression("jPaymentType.[Name]")]
        public String PaymentTypeName
        {
            get { return Fields.PaymentTypeName[this]; }
            set { Fields.PaymentTypeName[this] = value; }
        }

        [DisplayName("Payment Type Payment Amount"), Expression("jPaymentType.[PaymentAmount]")]
        public Decimal? PaymentTypePaymentAmount
        {
            get { return Fields.PaymentTypePaymentAmount[this]; }
            set { Fields.PaymentTypePaymentAmount[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public StudentRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field DepartmentId;
            public Int32Field No;
            public StringField Name;
            public StringField Surname;
            public StringField Gender;
            public DateTimeField PreEnrollmentDate;
            public DateTimeField EnrollmentDate;
            public StringField IdentityNumber;
            public Int32Field GroupPhoto;
            public BooleanField Photo;
            public BooleanField Graduated;
            public Int32Field SectionId;
            public Int32Field ClassId;
            public Int32Field SchoolId;
            public Int32Field ConsultantIId;
            public StringField PostalCode;
            public StringField Phone;
            public StringField MobilePhone;
            public StringField EMail;
            public StringField Address;
            public Int32Field CityId;
            public StringField ParentName;
            public StringField ParentSurname;
            public Int32Field ParentOccupationId;
            public Int32Field RelativeId;
            public StringField ParentMobile;
            public StringField ParentPhone;
            public StringField ParentHomeAddress;
            public StringField ParentPostalCode;
            public Int32Field ParentCityId;
            public StringField ParentWorkPhone;
            public StringField ParentWorkAddress;
            public StringField ParentWorkPostalCode;
            public Int32Field ParentWorkCityId;
            public StringField ParentIdentityNumber;
            public BooleanField IsRecorded;
            public DateTimeField RecordCancelDate;
            public Int32Field RecordStateId;
            public Int32Field PaymentTypeId;
            public Int32Field DiscountUserId;
            public StringField DiscountDescription;
            public StringField CreatedBy;
            public DateTimeField CreatedDate;
            public StringField LastModifiedBy;
            public DateTimeField LastModifiedDate;

            public Int32Field DepartmentCode;
            public StringField DepartmentName;
            public Int32Field DepartmentCityId;
            public Int32Field DepartmentTownId;

            public StringField SectionName;

            public Int32Field ClassDepartmentId;
            public StringField ClassClassCode;
            public StringField ClassSessionName;
            public StringField ClassName;

            public Int32Field SchoolDepartmentId;
            public StringField SchoolCode;
            public StringField SchoolName;
            public Int32Field SchoolSchoolGroupId;

            public Int32Field ConsultantIDepartmentId;
            public StringField ConsultantIName;

            public StringField ParentOccupationName;

            public StringField RelativeName;

            public StringField ParentCityName;

            public StringField ParentWorkCityName;

            public StringField RecordStateName;

            public StringField PaymentTypeName;
            public DecimalField PaymentTypePaymentAmount;

            public RowFields()
                : base("[dbo].[Student]")
            {
                LocalTextPrefix = "StudentMain.Student";
            }
        }
    }
}