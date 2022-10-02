using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kathryn_klatt_p1.Services.CharacterService
{
    public interface ICharacterService
    {
        Task<List<Character>> GetAllCharacters();
        Task<Character> GetCharacterById(int id);
        Task<List<Character>> AddCharacter (Character newCharacter);
    }
}