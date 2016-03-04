namespace StudentIN.GeneralDefinitions
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [Imported, PreserveMemberCase]
    public partial class OccupationService
    {
        [InlineConstant] public const string BaseUrl = "GeneralDefinitions/Occupation";
    
        [InlineCode("Q.serviceRequest('GeneralDefinitions/Occupation/Create', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Create(SaveRequest<OccupationRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('GeneralDefinitions/Occupation/Update', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Update(SaveRequest<OccupationRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('GeneralDefinitions/Occupation/Delete', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('GeneralDefinitions/Occupation/Retrieve', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<OccupationRow>> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('GeneralDefinitions/Occupation/List', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<OccupationRow>> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [Imported, PreserveMemberCase]
        public static class Methods
        {
            [InlineConstant] public const string Create = "GeneralDefinitions/Occupation/Create";
            [InlineConstant] public const string Update = "GeneralDefinitions/Occupation/Update";
            [InlineConstant] public const string Delete = "GeneralDefinitions/Occupation/Delete";
            [InlineConstant] public const string Retrieve = "GeneralDefinitions/Occupation/Retrieve";
            [InlineConstant] public const string List = "GeneralDefinitions/Occupation/List";
        }
    }
    
}

