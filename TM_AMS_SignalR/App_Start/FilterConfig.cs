﻿using System.Web;
using System.Web.Mvc;

namespace TM_AMS_SignalR
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}