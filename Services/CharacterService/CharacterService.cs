using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kathryn_klatt_p1.Services.CharacterService
{
    public class CharacterService : ICharacterService
    {
        private static List<Character> characters = new List<Character>{
            new Character(), // The default character
            new Character {Id = 1, Name = "Peach", Strength = 13, HitPoints = 90, Intelligence = 15} // Specifying a second character
        };
        public async Task<List<Character>> AddCharacter(Character newCharacter)
        {
            characters.Add(newCharacter);
            return characters;
        }

        public async Task<List<Character>> GetAllCharacters()
        {
            return characters;
        }

        public async Task<Character> GetCharacterById(int id)
        {
        return characters.FirstOrDefault(c => c.Id == id);
        }
    }
}