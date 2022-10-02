using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kathryn_klatt_p1.Dtos.Character
{
    public class UpdateCharacterDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = "Toad";
        public int HitPoints { get; set; } = 50;
        public int Strength { get; set; } = 10;
        public int Defense { get; set; } = 10;
        public int Intelligence { get; set; } = 10;
        public RpgClass Class { get; set; } = RpgClass.Student;
    }
}