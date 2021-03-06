﻿
namespace StudentIN.StudentMain
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    public partial class StudentForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "StudentMain.Student";
    
        public StudentForm(string idPrefix) : base(idPrefix) {}
    
        public GeneralDefinitions.DepartmentEditor DepartmentId { get { return ById<GeneralDefinitions.DepartmentEditor>("DepartmentId"); } }
        public IntegerEditor No { get { return ById<IntegerEditor>("No"); } }
        public StringEditor Name { get { return ById<StringEditor>("Name"); } }
        public StringEditor Surname { get { return ById<StringEditor>("Surname"); } }
        public EnumEditor Gender { get { return ById<EnumEditor>("Gender"); } }
        public DateEditor PreEnrollmentDate { get { return ById<DateEditor>("PreEnrollmentDate"); } }
        public DateEditor EnrollmentDate { get { return ById<DateEditor>("EnrollmentDate"); } }
        public StringEditor IdentityNumber { get { return ById<StringEditor>("IdentityNumber"); } }
        public IntegerEditor GroupPhoto { get { return ById<IntegerEditor>("GroupPhoto"); } }
        public BooleanEditor Photo { get { return ById<BooleanEditor>("Photo"); } }
        public BooleanEditor Graduated { get { return ById<BooleanEditor>("Graduated"); } }
        public GeneralDefinitions.SectionEditor SectionId { get { return ById<GeneralDefinitions.SectionEditor>("SectionId"); } }
        public GeneralDefinitions.ClassEditor ClassId { get { return ById<GeneralDefinitions.ClassEditor>("ClassId"); } }
        public GeneralDefinitions.SchoolEditor SchoolId { get { return ById<GeneralDefinitions.SchoolEditor>("SchoolId"); } }
        public GeneralDefinitions.ConsultantEditor ConsultantIId { get { return ById<GeneralDefinitions.ConsultantEditor>("ConsultantIId"); } }
        public BooleanEditor IsRecorded { get { return ById<BooleanEditor>("IsRecorded"); } }
        public DateEditor RecordCancelDate { get { return ById<DateEditor>("RecordCancelDate"); } }
        public GeneralDefinitions.RecordStateEditor RecordStateId { get { return ById<GeneralDefinitions.RecordStateEditor>("RecordStateId"); } }
        public GeneralDefinitions.PaymentTypeEditor PaymentTypeId { get { return ById<GeneralDefinitions.PaymentTypeEditor>("PaymentTypeId"); } }
        public StringEditor MobilePhone { get { return ById<StringEditor>("MobilePhone"); } }
        public StringEditor Phone { get { return ById<StringEditor>("Phone"); } }
        public StringEditor EMail { get { return ById<StringEditor>("EMail"); } }
        public StringEditor Address { get { return ById<StringEditor>("Address"); } }
        public StringEditor PostalCode { get { return ById<StringEditor>("PostalCode"); } }
        public GeneralDefinitions.CityEditor CityId { get { return ById<GeneralDefinitions.CityEditor>("CityId"); } }
        public StringEditor ParentName { get { return ById<StringEditor>("ParentName"); } }
        public StringEditor ParentSurname { get { return ById<StringEditor>("ParentSurname"); } }
        public GeneralDefinitions.OccupationEditor ParentOccupationId { get { return ById<GeneralDefinitions.OccupationEditor>("ParentOccupationId"); } }
        public GeneralDefinitions.RelativeEditor RelativeId { get { return ById<GeneralDefinitions.RelativeEditor>("RelativeId"); } }
        public StringEditor ParentMobile { get { return ById<StringEditor>("ParentMobile"); } }
        public StringEditor ParentPhone { get { return ById<StringEditor>("ParentPhone"); } }
        public StringEditor ParentHomeAddress { get { return ById<StringEditor>("ParentHomeAddress"); } }
        public StringEditor ParentPostalCode { get { return ById<StringEditor>("ParentPostalCode"); } }
        public GeneralDefinitions.CityEditor ParentCityId { get { return ById<GeneralDefinitions.CityEditor>("ParentCityId"); } }
        public StringEditor ParentWorkPhone { get { return ById<StringEditor>("ParentWorkPhone"); } }
        public StringEditor ParentWorkAddress { get { return ById<StringEditor>("ParentWorkAddress"); } }
        public StringEditor ParentWorkPostalCode { get { return ById<StringEditor>("ParentWorkPostalCode"); } }
        public GeneralDefinitions.CityEditor ParentWorkCityId { get { return ById<GeneralDefinitions.CityEditor>("ParentWorkCityId"); } }
        public StringEditor ParentIdentityNumber { get { return ById<StringEditor>("ParentIdentityNumber"); } }
        public IntegerEditor DiscountUserId { get { return ById<IntegerEditor>("DiscountUserId"); } }
        public StringEditor DiscountDescription { get { return ById<StringEditor>("DiscountDescription"); } }
    }
}

