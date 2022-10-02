using System.Text.Json.Serialization;

namespace kathryn_klatt_p1.Models
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum RpgClass
    {
                Plumber =1, Cop =2, Catlady =3, Mechanic = 4, Student = 5
    }
}