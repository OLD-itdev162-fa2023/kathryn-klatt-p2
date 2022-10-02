using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using kathryn_klatt_p1.Dtos.Character;

namespace kathryn_klatt_p1
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile(){
            CreateMap<Character, GetCharacterDto>();
            CreateMap<AddCharacterDto, Character>();
            CreateMap<UpdateCharacterDto, Character>();
        }
    }
}