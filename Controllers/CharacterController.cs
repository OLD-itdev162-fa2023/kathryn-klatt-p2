using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using kathryn_klatt_p1.Services.CharacterService;

namespace kathryn_klatt_p1.Controllers
{
    [ApiController] // Type is used to serve HTTP API responses (e.g 400)
    [Route("api/[controller]")] // Find specific controller
    public class CharacterController : ControllerBase
    {

        private readonly ICharacterService _characterService;
/* A constructor for the CharacterController class. */
        public CharacterController(ICharacterService characterService)
        {
            _characterService = characterService;
        }

        [HttpGet("GetAll")] 
            public async Task<ActionResult<List<Character>>> Get()
            {
                return Ok(await _characterService.GetAllCharacters());
            }
        

        [HttpGet("{id}")] // The passed in argument must be in curly braces
        public async Task<ActionResult<Character>> GetSingle(int id)
        {
            return Ok(await _characterService.GetCharacterById(id));
        }

        [HttpPost]
        public async Task<ActionResult<List<Character>>> AddCharacter(Character newCharacter){
            
            return Ok(await _characterService.AddCharacter(newCharacter));
        }
    }
}
