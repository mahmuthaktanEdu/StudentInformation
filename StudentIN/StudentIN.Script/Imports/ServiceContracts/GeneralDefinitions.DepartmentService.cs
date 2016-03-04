namespace StudentIN.GeneralDefinitions
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [Imported, PreserveMemberCase]
    public partial class DepartmentService
    {
        [InlineConstant] public const string BaseUrl = "GeneralDefinitions/Department";
    
        [InlineCode("Q.serviceRequest('GeneralDefinitions/Department/Create', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Create(SaveRequest<DepartmentRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('GeneralDefinitions/Department/Update', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Update(SaveRequest<DepartmentRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('GeneralDefinitions/Department/Delete', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('GeneralDefinitions/Department/Retrieve', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<DepartmentRow>> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('GeneralDefinitions/Department/List', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<DepartmentRow>> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [Imported, PreserveMemberCase]
        public static class Methods
        {
            [InlineConstant] public const string Create = "GeneralDefinitions/Department/Create";
            [InlineConstant] public const string Update = "GeneralDefinitions/Department/Update";
            [InlineConstant] public const string Delete = "GeneralDefinitions/Department/Delete";
            [InlineConstant] public const string Retrieve = "GeneralDefinitions/Department/Retrieve";
            [InlineConstant] public const string List = "GeneralDefinitions/Department/List";
        }
    }
    
}

