namespace StudentIN.GeneralDefinitions
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [Imported, PreserveMemberCase]
    public partial class CityService
    {
        [InlineConstant] public const string BaseUrl = "GeneralDefinitions/City";
    
        [InlineCode("Q.serviceRequest('GeneralDefinitions/City/Create', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Create(SaveRequest<CityRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('GeneralDefinitions/City/Update', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Update(SaveRequest<CityRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('GeneralDefinitions/City/Delete', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('GeneralDefinitions/City/Retrieve', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<CityRow>> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('GeneralDefinitions/City/List', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<CityRow>> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [Imported, PreserveMemberCase]
        public static class Methods
        {
            [InlineConstant] public const string Create = "GeneralDefinitions/City/Create";
            [InlineConstant] public const string Update = "GeneralDefinitions/City/Update";
            [InlineConstant] public const string Delete = "GeneralDefinitions/City/Delete";
            [InlineConstant] public const string Retrieve = "GeneralDefinitions/City/Retrieve";
            [InlineConstant] public const string List = "GeneralDefinitions/City/List";
        }
    }
    
}

