using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using FakeDataSender.Models;

namespace FakeDataSender.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Main()
        {
            return View();
        }

        public IActionResult Magnetic()
        {           
            return View();
        }

        public IActionResult SmokeSense()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        [HttpPost]
        public IActionResult SmokeSense(object obj)
        {
            ViewData["Message"] = "Your application description page.";

            Console.WriteLine(obj);

            return RedirectToAction();
        }

        public IActionResult Gas()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult WirelessPressure()
        {
            ViewData["Message"] = "Wireless Pressure";

            return View();
        }

        public IActionResult TempHumidity()
        {
            ViewData["Message"] = "Temparature Humidity";

            return View();
        }

        public IActionResult ElementAnalyzer()
        {
            ViewData["Message"] = "Element Analyzer";

            return View();
        }

        public IActionResult RHSensor()
        {
            ViewData["Message"] = "RH Sensor";

            return View();
        }

        public IActionResult LoraDetector()
        {
            ViewData["Message"] = "Lora Detector";

            return View();
        }

        public IActionResult IntellijFireHydrant()
        {
            ViewData["Message"] = "Intellijent Fire Hydrant";

            return View();
        }

        public IActionResult NBSmokeDetector()
        {
            ViewData["Message"] = "NB Smoke Detector";

            return View();
        }

        public IActionResult WSDDetector()
        {
            ViewData["Message"] = "WSD Detector";

            return View();
        }

        public IActionResult FireExtinguisher()
        {
            ViewData["Message"] = "Fire extinguisher";

            return View();
        }

        public IActionResult WaterInvade()
        {
            ViewData["Message"] = "WaterInvade";

            return View();
        }

        public IActionResult MQTT()
        {
            ViewData["Message"] = "MQTT";

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
