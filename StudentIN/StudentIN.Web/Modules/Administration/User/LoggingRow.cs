namespace StudentIN
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    /// <summary>
    /// This is a sample base class for rows that does insert/update date and user audit logging automatically.
    /// It is recommended to create your own base class, if your auditing field names are different than these.
    /// You should implement IInsertLogRow and/or IUpdateLogRow interfaces. ILoggingRow is a combination of these
    /// two. There is also an optional IDeleteLogRow interface that supports auditing on delete but for it to work
    /// you need to also implement IIsActiveDeletedRow so that your rows aren't actually deleted.
    /// </summary>
    public abstract class LoggingRow : Row, IInsertLogRow, IUpdateLogRow, IDeleteLogRow, IIsActiveDeletedRow
    {
        protected LoggingRow(RowFieldsBase fields)
            : base(fields)
        {
            loggingFields = (LoggingRowFields)fields;
        }

        [NotNull, Insertable(false), Updatable(false)]
        public Int32? InsertUserId
        {
            get { return loggingFields.InsertUserId[this]; }
            set { loggingFields.InsertUserId[this] = value; }
        }

        [NotNull, Insertable(false), Updatable(false)]
        public DateTime? InsertDate
        {
            get { return loggingFields.InsertDate[this]; }
            set { loggingFields.InsertDate[this] = value; }
        }

        [Insertable(false), Updatable(false)]
        public Int32? UpdateUserId
        {
            get { return loggingFields.UpdateUserId[this]; }
            set { loggingFields.UpdateUserId[this] = value; }
        }

        [Insertable(false), Updatable(false)]
        public DateTime? UpdateDate
        {
            get { return loggingFields.UpdateDate[this]; }
            set { loggingFields.UpdateDate[this] = value; }
        }

        [Insertable(false), Updatable(false)]
        public Int32? DeleteUserId
        {
            get { return loggingFields.DeleteUserId[this]; }
            set { loggingFields.DeleteUserId[this] = value; }
        }

        [Insertable(false), Updatable(false)]
        public DateTime? DeleteDate
        {
            get { return loggingFields.DeleteDate[this]; }
            set { loggingFields.DeleteDate[this] = value; }
        }

        [NotNull, Insertable(false), Updatable(true), DefaultValue(1)]
        public Int16? IsActive
        {
            get { return loggingFields.IsActive[this]; }
            set { loggingFields.IsActive[this] = value; }
        }

        IIdField IInsertLogRow.InsertUserIdField
        {
            get { return loggingFields.InsertUserId; }
        }

        DateTimeField IInsertLogRow.InsertDateField
        {
            get { return loggingFields.InsertDate; }
        }

        IIdField IUpdateLogRow.UpdateUserIdField
        {
            get { return loggingFields.UpdateUserId; }
        }

        DateTimeField IUpdateLogRow.UpdateDateField
        {
            get { return loggingFields.UpdateDate; }
        }

        DateTimeField IDeleteLogRow.DeleteDateField
        {
            get { return loggingFields.DeleteDate; }
        }

        IIdField IDeleteLogRow.DeleteUserIdField
        {
            get { return loggingFields.DeleteUserId; }
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get { return loggingFields.IsActive; }
        }

        private LoggingRowFields loggingFields;

        public class LoggingRowFields : RowFieldsBase
        {
            public Int32Field InsertUserId;
            public DateTimeField InsertDate;
            public Int32Field UpdateUserId;
            public DateTimeField UpdateDate;
            public Int32Field DeleteUserId;
            public DateTimeField DeleteDate;
            public Int16Field IsActive;

            public LoggingRowFields(string tableName)
                : base(tableName)
            {
            }
        }
    }
}