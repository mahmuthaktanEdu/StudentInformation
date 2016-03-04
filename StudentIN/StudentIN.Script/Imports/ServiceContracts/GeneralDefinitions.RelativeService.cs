namespace StudentIN.GeneralDefinitions
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [Imported, PreserveMemberCase]
    public partial class RelativeService
    {
        [InlineConstant] public const string BaseUrl = "GeneralDefinitions/Relative";
    
        [InlineCode("Q.serviceRequest('GeneralDefinitions/Relative/Create', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Create(SaveRequest<RelativeRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('GeneralDefinitions/Relative/Update', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Update(SaveRequest<RelativeRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('GeneralDefinitions/Relative/Delete', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('GeneralDefinitions/Relative/Retrieve', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<RelativeRow>> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('GeneralDefinitions/Relative/List', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<RelativeRow>> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [Imported, PreserveMemberCase]
        public static class Methods
        {
            [InlineConstant] public const string Create = "GeneralDefinitions/Relative/Create";
            [InlineConstant] public const string Update = "GeneralDefinitions/Relative/Update";
            [InlineConstant] public const string Delete = "GeneralDefinitions/Relative/Delete";
            [InlineConstant] public const string Retrieve = "GeneralDefinitions/Relative/Retrieve";
            [InlineConstant] public const string List = "GeneralDefinitions/Relative/List";
        }
    }
    
}

