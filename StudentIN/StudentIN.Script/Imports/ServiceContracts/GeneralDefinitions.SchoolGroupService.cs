
namespace StudentIN.GeneralDefinitions
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [Imported, PreserveMemberCase]
    public partial class SchoolGroupService
    {
        [InlineConstant] public const string BaseUrl = "GeneralDefinitions/SchoolGroup";

        [InlineCode("Q.serviceRequest('GeneralDefinitions/SchoolGroup/Create', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Create(SaveRequest<SchoolGroupRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('GeneralDefinitions/SchoolGroup/Update', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Update(SaveRequest<SchoolGroupRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
 
        [InlineCode("Q.serviceRequest('GeneralDefinitions/SchoolGroup/Delete', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('GeneralDefinitions/SchoolGroup/Retrieve', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<SchoolGroupRow>> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('GeneralDefinitions/SchoolGroup/List', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<SchoolGroupRow>> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }

        [Imported, PreserveMemberCase]
        public static class Methods
        {
            [InlineConstant] public const string Create = "GeneralDefinitions/SchoolGroup/Create";
            [InlineConstant] public const string Update = "GeneralDefinitions/SchoolGroup/Update";
            [InlineConstant] public const string Delete = "GeneralDefinitions/SchoolGroup/Delete";
            [InlineConstant] public const string Retrieve = "GeneralDefinitions/SchoolGroup/Retrieve";
            [InlineConstant] public const string List = "GeneralDefinitions/SchoolGroup/List";
        }
    }
}