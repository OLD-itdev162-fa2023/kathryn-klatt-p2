using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace kathryn_klatt_p1.Controllers
{
    [ApiController] // Type is used to serve HTTP API responses (e.g 400)
    [Route("api/[controller]")] // Find specific controller
    public class CharacterController : ControllerBase
    {
        private static Character student = new Character();

    [HttpGet]
        public ActionResult<Character> Get()
        {
            return Ok(student);
        }
    }
}