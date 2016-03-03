
namespace StudentIN.GeneralDefinitions
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [Imported, PreserveMemberCase]
    public partial class RecordStateService
    {
        [InlineConstant] public const string BaseUrl = "GeneralDefinitions/RecordState";

        [InlineCode("Q.serviceRequest('GeneralDefinitions/RecordState/Create', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Create(SaveRequest<RecordStateRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('GeneralDefinitions/RecordState/Update', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Update(SaveRequest<RecordStateRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
 
        [InlineCode("Q.serviceRequest('GeneralDefinitions/RecordState/Delete', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('GeneralDefinitions/RecordState/Retrieve', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<RecordStateRow>> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('GeneralDefinitions/RecordState/List', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<RecordStateRow>> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }

        [Imported, PreserveMemberCase]
        public static class Methods
        {
            [InlineConstant] public const string Create = "GeneralDefinitions/RecordState/Create";
            [InlineConstant] public const string Update = "GeneralDefinitions/RecordState/Update";
            [InlineConstant] public const string Delete = "GeneralDefinitions/RecordState/Delete";
            [InlineConstant] public const string Retrieve = "GeneralDefinitions/RecordState/Retrieve";
            [InlineConstant] public const string List = "GeneralDefinitions/RecordState/List";
        }
    }
}