
namespace StudentIN.StudentMain
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [Imported, PreserveMemberCase]
    public partial class StudentService
    {
        [InlineConstant] public const string BaseUrl = "StudentMain/Student";

        [InlineCode("Q.serviceRequest('StudentMain/Student/Create', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Create(SaveRequest<StudentRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('StudentMain/Student/Update', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Update(SaveRequest<StudentRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
 
        [InlineCode("Q.serviceRequest('StudentMain/Student/Delete', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('StudentMain/Student/Retrieve', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<StudentRow>> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('StudentMain/Student/List', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<StudentRow>> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }

        [Imported, PreserveMemberCase]
        public static class Methods
        {
            [InlineConstant] public const string Create = "StudentMain/Student/Create";
            [InlineConstant] public const string Update = "StudentMain/Student/Update";
            [InlineConstant] public const string Delete = "StudentMain/Student/Delete";
            [InlineConstant] public const string Retrieve = "StudentMain/Student/Retrieve";
            [InlineConstant] public const string List = "StudentMain/Student/List";
        }
    }
}