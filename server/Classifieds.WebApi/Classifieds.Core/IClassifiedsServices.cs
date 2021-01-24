using Classifieds.DB;
using System.Collections.Generic;

namespace Classifieds.Core
{
    public interface IClassifiedsServices
    {
        List<Classified> GetClassifieds();
        Classified GetClassified(int id);
        Classified CreateClassified(Classified classified);
        void DeleteClassified(Classified classified);
        Classified EditClassified(Classified classified);
    }
}
