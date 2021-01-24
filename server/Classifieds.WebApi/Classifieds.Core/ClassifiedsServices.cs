using Classifieds.DB;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Classifieds.Core
{
    public class ClassifiedsServices : IClassifiedsServices
    {
        private AppDbContext _context;

        public ClassifiedsServices(AppDbContext context)
        {
            _context = context;
        }

        public Classified CreateClassified(Classified classified)
        {
            classified.Date = DateTime.Now.ToString("dd/MM/yyyy HH:mm");

            _context.Add(classified);
            _context.SaveChanges();

            return classified;
        }

        public void DeleteClassified(Classified classified)
        {
            _context.Classifieds.Remove(classified);
            _context.SaveChanges();
        }

        public Classified EditClassified(Classified classified)
        {
            classified.Date = DateTime.Now.ToString("dd/MM/yyyy HH:mm");

            var dbClassified = _context.Classifieds.First(e => e.Id == classified.Id);
            dbClassified.Title = classified.Title;
            dbClassified.Description = classified.Description;
            dbClassified.Date = classified.Date;

            _context.SaveChanges();

            return dbClassified;
        }

        public Classified GetClassified(int id)
        {
            return _context.Classifieds.First(e => e.Id == id);
        }

        public List<Classified> GetClassifieds()
        {
            return _context.Classifieds.OrderByDescending(e => e.Date).ToList();
        }

    }
}
