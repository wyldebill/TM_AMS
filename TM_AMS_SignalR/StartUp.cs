using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(TM_AMS_SignalR.Startup))]

namespace TM_AMS_SignalR
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
        }
    }
}