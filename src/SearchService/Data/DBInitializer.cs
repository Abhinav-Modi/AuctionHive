using System.Text.Json;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using MongoDB.Entities;
using SearchService.Models;
using SearchService.Services;

namespace SearchService.Data;

public class DbInitializer
{
    public static async Task InitDb(WebApplication app)
    {
        await DB.InitAsync("SearchDb",
                    MongoClientSettings.FromConnectionString(app.Configuration.GetConnectionString("MongoDbConnection")));

        await DB.Index<Item>()
            .Key(x => x.Make, KeyType.Text)
            .Key(x => x.Model, KeyType.Text)
            .Key(x => x.Color, KeyType.Text)
            .CreateAsync();

        var count = await DB.CountAsync<Item>();
        Console.WriteLine("Not seeding database with items");
        if (count == 0)
        {
            Console.WriteLine("Seeding database with items");
            var itemsData = await File.ReadAllTextAsync("Data/auctions.json");
            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            };
            var items = JsonSerializer.Deserialize<List<Item>>(itemsData, options);
            await DB.SaveAsync(items);

        }
    }
}