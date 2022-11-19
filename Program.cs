global using kathryn_klatt_p1.Models;
using kathryn_klatt_p1.Services.CharacterService;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddCors();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAutoMapper(typeof(Program).Assembly); // Adding automapper to application
builder.Services.AddScoped<ICharacterService, CharacterService>(); 
// ^ Creates a new instance of requested service for each request
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseHttpsRedirection();

app.UseCors(policy=> policy
.AllowAnyHeader()
.AllowAnyMethod()
.AllowCredentials()
.WithOrigins("http://localhost:4200/", "http://localhost:7206/", "http://localhost:5035/")
);

app.UseAuthorization();

app.MapControllers();

app.Run();
