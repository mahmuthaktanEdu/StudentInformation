﻿
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

    [ConnectionKey("Default"), DisplayName("Occupation"), InstanceName("Occupation"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [LookupScript("StudentIN.Occupation")]

    public sealed class OccupationRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Name"), Size(50), QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
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

        public OccupationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Name;

            public RowFields()
                : base("[dbo].[Occupation]")
            {
                LocalTextPrefix = "GeneralDefinitions.Occupation";
            }
        }
    }
}