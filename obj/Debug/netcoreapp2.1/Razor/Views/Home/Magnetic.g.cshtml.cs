#pragma checksum "C:\Users\zx\Desktop\code\FakeDataSender\Views\Home\Magnetic.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "ab311704e2405f1547cbb03daf52f90f476a601d"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Magnetic), @"mvc.1.0.view", @"/Views/Home/Magnetic.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Home/Magnetic.cshtml", typeof(AspNetCore.Views_Home_Magnetic))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "C:\Users\zx\Desktop\code\FakeDataSender\Views\_ViewImports.cshtml"
using FakeDataSender;

#line default
#line hidden
#line 2 "C:\Users\zx\Desktop\code\FakeDataSender\Views\_ViewImports.cshtml"
using FakeDataSender.Models;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"ab311704e2405f1547cbb03daf52f90f476a601d", @"/Views/Home/Magnetic.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c4013da6b98dd9c6a255d64fd9cf406101d37674", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Magnetic : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("onload", new global::Microsoft.AspNetCore.Html.HtmlString("assignValueToText()"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 1 "C:\Users\zx\Desktop\code\FakeDataSender\Views\Home\Magnetic.cshtml"
  
    ViewData["Title"] = "门磁";

#line default
#line hidden
            BeginContext(38, 1806, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "c674f643d8894f258f4f75760c15b988", async() => {
                BeginContext(73, 145, true);
                WriteLiteral("\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n                <h2>门磁数据</h2>\r\n            </div>\r\n");
                EndContext();
                BeginContext(793, 1044, true);
                WriteLiteral(@"        </div>
    </div>

    <div class=""container"">
        <input hidden value=""magnetic"" id=""category"" />
        <div class=""form-group"">
            <label class=""lh46 pull-left"">报警类型：</label>
            <a class=""btn btn-default btn-lg btn-llg magtype"" data-value=""03"">门被打开</a>
            <a class=""btn btn-default btn-lg btn-llg magtype"" data-value=""01"">传感器故障</a>
            <a class=""btn btn-default btn-lg btn-llg magtype"" data-value=""01"">低电量</a>
            <a class=""btn btn-default btn-lg btn-llg magtype"" data-value=""10"">门磁被拆开</a>
        </div>
        <div class=""form-group form-group-inline"">
            <label for=""mac"" class=""lh46 pull-left"">Mac地址：</label>
            <input class=""form-control"" id=""mac"" type=""text"">
        </div>
        <div class=""form-group text-center"">
            <button type=""submit"" id=""submit"" class=""btn btn-success btn-lg btn-llg"">提交</button>
            <button type=""reset"" class=""btn btn-default btn-lg btn-llg"" id=""cancel"">取消</button>
        ");
                WriteLiteral("</div>\r\n    </div>\r\n");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(1844, 2, true);
            WriteLiteral("\r\n");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
