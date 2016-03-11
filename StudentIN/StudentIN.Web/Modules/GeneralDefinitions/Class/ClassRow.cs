
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

    [ConnectionKey("Default"), DisplayName("Class"), InstanceName("Class"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [LookupScript("StudentIN.Class")]
    public sealed class ClassRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Department Id"), NotNull]
        public Int32? DepartmentId
        {
            get { return Fields.DepartmentId[this]; }
            set { Fields.DepartmentId[this] = value; }
        }

        [DisplayName("Name"), Size(10), QuickSearch, LookupInclude]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }
        [DisplayName("Class Code"), Size(6), NotNull]
        public String ClassCode
        {
            get { return Fields.ClassCode[this]; }
            set { Fields.ClassCode[this] = value; }
        }

        [DisplayName("Session Name"), Size(10), LookupInclude]
        public String SessionName
        {
            get { return Fields.SessionName[this]; }
            set { Fields.SessionName[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ClassCode; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ClassRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field DepartmentId;
            public StringField ClassCode;
            public StringField SessionName;
            public StringField Name;

            public RowFields()
                : base("[dbo].[Class]")
            {
                LocalTextPrefix = "GeneralDefinitions.Class";
            }
        }
    }
}