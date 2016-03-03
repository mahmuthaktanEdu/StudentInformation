
namespace StudentIN.GeneralDefinitions
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [Imported, PreserveMemberCase]
    public partial class ConsultantService
    {
        [InlineConstant] public const string BaseUrl = "GeneralDefinitions/Consultant";

        [InlineCode("Q.serviceRequest('GeneralDefinitions/Consultant/Create', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Create(SaveRequest<ConsultantRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('GeneralDefinitions/Consultant/Update', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Update(SaveRequest<ConsultantRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
 
        [InlineCode("Q.serviceRequest('GeneralDefinitions/Consultant/Delete', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('GeneralDefinitions/Consultant/Retrieve', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<ConsultantRow>> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('GeneralDefinitions/Consultant/List', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<ConsultantRow>> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }

        [Imported, PreserveMemberCase]
        public static class Methods
        {
            [InlineConstant] public const string Create = "GeneralDefinitions/Consultant/Create";
            [InlineConstant] public const string Update = "GeneralDefinitions/Consultant/Update";
            [InlineConstant] public const string Delete = "GeneralDefinitions/Consultant/Delete";
            [InlineConstant] public const string Retrieve = "GeneralDefinitions/Consultant/Retrieve";
            [InlineConstant] public const string List = "GeneralDefinitions/Consultant/List";
        }
    }
}