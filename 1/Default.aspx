<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>
<%@ Register Assembly="System.Web.Extensions, Version=1.0.61025.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35"
    Namespace="System.Web.UI" TagPrefix="asp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<script language="javascript" type="text/javascript">
    function AccessClipboardData() {
        try {
            window.clipboardData.setData('text', "No print data");
        } catch (err) {
           // txt = "There was an error on this page.\n\n";
           // txt += "Error description: " + err.description + "\n\n";
           // txt += "Click OK to continue.\n\n";
          //  alert(txt);
        }

    }
</script>
    <title></title>
    <style type="text/css">
        #form1
        {
            text-align: center;
        }
        .style1
        {
            font-family: "Calisto MT";
            color: #999999;
            font-weight: bold;
        }
        .style2
        {
            font-family: "Calisto MT";
            color: #C0C0C0;
            font-weight: bold;
            font-size: medium;
        }
        #divmaster
        {
            text-align: left;
        }
        .style3
        {
            width: 100%;
        }
        .style4
        {
            width: 146px;
        }
        .style5
        {
            width: 146px;
            height: 34px;
        }
        .style6
        {
            height: 34px;
        }
    </style>
<style type="text/css" media="print">
.noprint {
display: none;
}
</style>
</head>
<body  oncontextmenu="return false;"> 
    <form id="form1" runat="server">
   <asp:ScriptManager ID="ScriptManager1" runat="server">
    </asp:ScriptManager>
    <asp:UpdatePanel ID="UpdatePanel1" runat="server" >
    <ContentTemplate> 
    <div class="noprint" id="divmaster">
        <h5>
            &nbsp;</h5>
        <table class="style3">
            <tr>
                <td class="style5">
                </td>
                <td class="style6">
                    <span class="style2">This text can not copy it but you can get it by Html Source
                    </span>
                    <br class="style1" />
                </td>
            </tr>
            <tr>
                <td class="style4">
                    &nbsp;</td>
                <td style="color: #999999">
                    <asp:Literal ID="LitText" runat="server"></asp:Literal>
                </td>
            </tr>
        </table>
        <br />
        <asp:Timer ID="Timer1" runat="server" Enabled="False" Interval="2000" 
            ontick="Timer1_Tick">
        </asp:Timer>
        <br />
    </div>
   
  
    </ContentTemplate>
    </asp:UpdatePanel>
     <script language="JavaScript" type="text/javascript">
         setInterval("AccessClipboardData()", 300);
         var ClipBoardText = "";
         
         if (window.clipboardData) {
             ClipBoardText = window.clipboardData.getData('text');
             if (ClipBoardText == "") {
                 alert('Sorry you have to allow the page to access clipboard');
                 // hide the div which contains your data
                 document.all("divmaster").style.display = "none"
             } else {

                 document.onkeydown = function(ev) {
                     var a;
                     ev = window.event;
                     if (typeof ev == "undefined") {
                         alert("PLEASE DON'T USE KEYBORD");
                     }
                     a = ev.keyCode;
                     alert("PLEASE DON'T USE KEYBORD");
                     return false;
                 }
                 document.onkeyup = function(ev) {
                     var charCode;
                     if (typeof ev == "undefined") {
                         ev = window.event;
                         alert("PLEASE DON'T USE KEYBORD");
                     } else {
                         alert("PLEASE DON'T USE KEYBORD");
                     }
                     return false;
                 }
             }
         }
       
</script>
    </form>
</body>
</html>
