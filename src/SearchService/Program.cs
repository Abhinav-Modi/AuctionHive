
using MongoDB.Entities;
using SearchService.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

var app = builder.Build();

app.UseAuthorization();

app.MapControllers();

try
{
    await DbInitializer.InitDb(app);
}
catch (System.Exception)
{

    Console.WriteLine("Error initializing the database");
}


app.Run();
