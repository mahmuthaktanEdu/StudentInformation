namespace StudentIN.GeneralDefinitions
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [Imported, PreserveMemberCase]
    public partial class SchoolService
    {
        [InlineConstant] public const string BaseUrl = "GeneralDefinitions/School";
    
        [InlineCode("Q.serviceRequest('GeneralDefinitions/School/Create', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Create(SaveRequest<SchoolRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('GeneralDefinitions/School/Update', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Update(SaveRequest<SchoolRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('GeneralDefinitions/School/Delete', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('GeneralDefinitions/School/Retrieve', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<SchoolRow>> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('GeneralDefinitions/School/List', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<SchoolRow>> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [Imported, PreserveMemberCase]
        public static class Methods
        {
            [InlineConstant] public const string Create = "GeneralDefinitions/School/Create";
            [InlineConstant] public const string Update = "GeneralDefinitions/School/Update";
            [InlineConstant] public const string Delete = "GeneralDefinitions/School/Delete";
            [InlineConstant] public const string Retrieve = "GeneralDefinitions/School/Retrieve";
            [InlineConstant] public const string List = "GeneralDefinitions/School/List";
        }
    }
    
}

