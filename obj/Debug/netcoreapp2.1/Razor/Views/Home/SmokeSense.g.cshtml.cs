#pragma checksum "C:\Users\zx\Desktop\code\FakeDataSender\Views\Home\SmokeSense.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "35a81795f8d2fdcf02363340a192d2300b31d1bd"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_SmokeSense), @"mvc.1.0.view", @"/Views/Home/SmokeSense.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Home/SmokeSense.cshtml", typeof(AspNetCore.Views_Home_SmokeSense))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"35a81795f8d2fdcf02363340a192d2300b31d1bd", @"/Views/Home/SmokeSense.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c4013da6b98dd9c6a255d64fd9cf406101d37674", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_SmokeSense : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
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
#line 1 "C:\Users\zx\Desktop\code\FakeDataSender\Views\Home\SmokeSense.cshtml"
  
    ViewData["Title"] = "无线烟感";

#line default
#line hidden
            BeginContext(40, 86, true);
            WriteLiteral("<style type=\"text/css\">\r\n    .input_text {\r\n        width: 400px;\r\n    }\r\n</style>\r\n\r\n");
            EndContext();
            BeginContext(126, 4183, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "d6a8faf20f2141d3a6548620a0f249a8", async() => {
                BeginContext(161, 145, true);
                WriteLiteral("\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n                <h2>烟雾数据</h2>\r\n            </div>\r\n");
                EndContext();
                BeginContext(881, 3049, true);
                WriteLiteral(@"        </div>
    </div>

    <div class=""container"" id=""esa"">
        <div class=""form-group"">
            <h3 class=""pull-left"">厂商供应型号：ESA14-JD(默认)</h3>
        </div>
    </div>

    <div class=""container"" id=""esaAss"">
        <input hidden value=""smoke"" id=""category"" />
        <div class=""form-group"">
            <label class=""lh46 pull-left"">版本：</label>
            <a class=""btn btn-default btn-lg btn-llg version"" data-version=""01"">01</a>
            <a class=""btn btn-default btn-lg btn-llg version active"" data-version=""02"">02</a>
        </div>
        <div class=""form-group"">
            <label class=""lh46 pull-left"">报警类型：</label>
            <a class=""btn btn-default btn-lg btn-llg type active"" data-type=""00"">无烟</a>
            <a class=""btn btn-default btn-lg btn-llg type"" data-type=""04"">烟雾</a>
        </div>
        <div class=""form-group"">
            <label class=""lh46 pull-left"">传感器状态：</label>
            <a class=""btn btn-default btn-lg btn-llg state1 active"" data-state=");
                WriteLiteral(@"""00"">正常</a>
            <a class=""btn btn-default btn-lg btn-llg state1"" data-state=""01"">故障</a>
            <a class=""btn btn-default btn-lg btn-llg state2 active"" data-state=""00"">电量正常</a>
            <a class=""btn btn-default btn-lg btn-llg state2"" data-state=""01"">低电</a>
            <a class=""btn btn-default btn-lg btn-llg state3 active"" data-state=""000"">按键正常</a>
            <a class=""btn btn-default btn-lg btn-llg state3"" data-state=""001"">测试</a>
            <a class=""btn btn-default btn-lg btn-llg state3"" data-state=""010"">消音</a>
        </div>
    </div>

    <div class=""container"" id=""gs"">
        <div class=""form-group"">
            <h3 class=""pull-left"">厂商供应型号：GS517L</h3>
        </div>
    </div>

    <div class=""container"" id=""gsAss"">
        <div class=""form-group"">
            <label class=""lh46 pull-left"">设备状态：</label>
            <a class=""btn btn-default btn-lg btn-llg vertype"" data-value=""1"">报警记忆</a>
            <a class=""btn btn-default btn-lg btn-llg vertype"" data-value=""1"">");
                WriteLiteral(@"电量低</a>
            <a class=""btn btn-default btn-lg btn-llg vertype"" data-value=""1"">传感器故障</a>
            <a class=""btn btn-default btn-lg btn-llg vertype"" data-value=""1"">报警静音</a>
            <a class=""btn btn-default btn-lg btn-llg vertype"" data-value=""1"">烟雾报警</a>
        </div>
        <div class=""form-group form-group-inline input_text"">
            <label class=""lh46 pull-left"">设备电池：</label>
            <input class=""form-control"" id=""batPer"" type=""text"">
        </div>
        <div class=""form-group form-group-inline input_text"">
            <label class=""lh46 pull-left"">烟雾浓度：</label>
            <input class=""form-control input_text"" id=""smokePer"" type=""text"">
        </div>
    </div>

    <div class=""container"">
        <br>
        <br>
    </div>

    <div class=""container"">
        <div class=""form-group form-group-inline"">
            <label for=""mac"" class=""lh46 pull-left"">Mac地址：</label>
            <input class=""form-control"" id=""mac"" type=""text"">
");
                EndContext();
                BeginContext(4017, 285, true);
                WriteLiteral(@"        </div>
        <div class=""form-group text-center"">
            <button type=""submit"" id=""submit"" class=""btn btn-success btn-lg btn-llg"">提交</button>
            <button type=""reset"" class=""btn btn-default btn-lg btn-llg"" id=""cancel"">取消</button>
        </div>
    </div>
");
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
