using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// Service responses are preferable to complex exception messages in console/frozen app.
namespace kathryn_klatt_p1.Models
{
    public class ServiceResponse<T>
    {
        public T? Data {get;set;}
        public bool Success { get; set; } = true;
        public string Message { get; set; } = string.Empty;
    }
}