using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text;
public partial class _Default : System.Web.UI.Page 
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!Page.IsPostBack)
        {
            // just to avoid load data in page_Load event
            Timer1.Enabled = true;
        }
      
    }
  
    protected void Timer1_Tick(object sender, EventArgs e)
    {
        try
        {
            StringBuilder st = new StringBuilder();
            st.Append("<b><p align='left'> Hello everybody ,</p> ");
            st.Append("* This text not appear in Html source because I use update panel </br>");
            st.Append("* You can not use print screen key to get the data as image </br>");
            st.Append("* You can not copy text by keyboard or mouse ! </br>");
            st.Append("* Finally You can not Print this content if you try to print the page will be empty :) ");
            LitText.Text = st.ToString();
            Timer1.Enabled = false;
        }
        catch
        {
            throw new Exception();
        }
    }
}
