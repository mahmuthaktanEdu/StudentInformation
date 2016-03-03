
namespace StudentIN.GeneralDefinitions
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [Imported, PreserveMemberCase]
    public partial class PaymentTypeService
    {
        [InlineConstant] public const string BaseUrl = "GeneralDefinitions/PaymentType";

        [InlineCode("Q.serviceRequest('GeneralDefinitions/PaymentType/Create', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Create(SaveRequest<PaymentTypeRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('GeneralDefinitions/PaymentType/Update', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Update(SaveRequest<PaymentTypeRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
 
        [InlineCode("Q.serviceRequest('GeneralDefinitions/PaymentType/Delete', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('GeneralDefinitions/PaymentType/Retrieve', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<PaymentTypeRow>> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('GeneralDefinitions/PaymentType/List', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<PaymentTypeRow>> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }

        [Imported, PreserveMemberCase]
        public static class Methods
        {
            [InlineConstant] public const string Create = "GeneralDefinitions/PaymentType/Create";
            [InlineConstant] public const string Update = "GeneralDefinitions/PaymentType/Update";
            [InlineConstant] public const string Delete = "GeneralDefinitions/PaymentType/Delete";
            [InlineConstant] public const string Retrieve = "GeneralDefinitions/PaymentType/Retrieve";
            [InlineConstant] public const string List = "GeneralDefinitions/PaymentType/List";
        }
    }
}