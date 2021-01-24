using Microsoft.EntityFrameworkCore;

namespace Classifieds.DB
{
    public class AppDbContext : DbContext
    {
        public DbSet<Classified> Classifieds { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(
                @"Server=(localdb)\mssqllocaldb;Database=ClassifiedsDB;Integrated Security=True");
        }
    }
}
