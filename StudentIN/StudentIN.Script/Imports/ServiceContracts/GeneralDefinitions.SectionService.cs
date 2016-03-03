
namespace StudentIN.GeneralDefinitions
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [Imported, PreserveMemberCase]
    public partial class SectionService
    {
        [InlineConstant] public const string BaseUrl = "GeneralDefinitions/Section";

        [InlineCode("Q.serviceRequest('GeneralDefinitions/Section/Create', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Create(SaveRequest<SectionRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('GeneralDefinitions/Section/Update', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Update(SaveRequest<SectionRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
 
        [InlineCode("Q.serviceRequest('GeneralDefinitions/Section/Delete', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('GeneralDefinitions/Section/Retrieve', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<SectionRow>> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('GeneralDefinitions/Section/List', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<SectionRow>> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }

        [Imported, PreserveMemberCase]
        public static class Methods
        {
            [InlineConstant] public const string Create = "GeneralDefinitions/Section/Create";
            [InlineConstant] public const string Update = "GeneralDefinitions/Section/Update";
            [InlineConstant] public const string Delete = "GeneralDefinitions/Section/Delete";
            [InlineConstant] public const string Retrieve = "GeneralDefinitions/Section/Retrieve";
            [InlineConstant] public const string List = "GeneralDefinitions/Section/List";
        }
    }
}