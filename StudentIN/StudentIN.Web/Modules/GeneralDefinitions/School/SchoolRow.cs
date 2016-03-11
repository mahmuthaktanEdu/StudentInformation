
namespace StudentIN.GeneralDefinitions.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("School"), InstanceName("School"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [LookupScript("StudentIN.School")]

    public sealed class SchoolRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Department Id")]
        public Int32? DepartmentId
        {
            get { return Fields.DepartmentId[this]; }
            set { Fields.DepartmentId[this] = value; }
        }

        [DisplayName("Name"), Size(50), QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Code"), Column("code"), Size(50)]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }



        [DisplayName("School Group"), ForeignKey("[dbo].[SchoolGroup]", "ID"), LeftJoin("jSchoolGroup"), TextualField("SchoolGroupName")]
        public Int32? SchoolGroupId
        {
            get { return Fields.SchoolGroupId[this]; }
            set { Fields.SchoolGroupId[this] = value; }
        }

        [DisplayName("School Group Name"), Expression("jSchoolGroup.[Name]")]
        public String SchoolGroupName
        {
            get { return Fields.SchoolGroupName[this]; }
            set { Fields.SchoolGroupName[this] = value; }
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

        public SchoolRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field DepartmentId;
            public StringField Code;
            public StringField Name;
            public Int32Field SchoolGroupId;

            public StringField SchoolGroupName;

            public RowFields()
                : base("[dbo].[School]")
            {
                LocalTextPrefix = "GeneralDefinitions.School";
            }
        }
    }
}