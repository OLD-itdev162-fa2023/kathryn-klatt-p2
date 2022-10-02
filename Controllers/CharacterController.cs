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
        private static List<Character> characters = new List<Character>{
            new Character(), // The default character
            new Character {Id = 1, Name = "Peach", Strength = 13, HitPoints = 90, Intelligence = 15} // Specifying a second character
        };

        [HttpGet("GetAll")] 
            public ActionResult<List<Character>> Get()
            {
                return Ok(characters);
            }
        

        [HttpGet("{id}")] // The passed in argument must be in curly braces
        public ActionResult<Character> GetSingle(int id)
        {
            return Ok(characters.FirstOrDefault(c=>c.Id == id));
        }
    }
}
