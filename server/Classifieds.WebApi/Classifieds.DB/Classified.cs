using System.ComponentModel.DataAnnotations;

namespace Classifieds.DB
{
    public class Classified
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Date { get; set; }
    }
}
