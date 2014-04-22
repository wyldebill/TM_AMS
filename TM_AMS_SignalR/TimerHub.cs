using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Microsoft.AspNet.SignalR;

namespace TM_AMS_SignalR
{
    public class TimerHub : Hub
    {
        //
        // GET: /TimerHub/

        public void StartTimer()
        {
            Clients.All.startTimerNow();
            
        }
        
        public void StopTimer()
        {
            Clients.All.stopTimerNow();
        }

        public void ResetTimer()
        {
            
        }
    }
}
