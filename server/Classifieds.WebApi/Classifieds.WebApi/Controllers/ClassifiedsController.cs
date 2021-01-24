using Classifieds.Core;
using Classifieds.DB;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Classifieds.WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClassifiedsController : ControllerBase
    {

        private IClassifiedsServices _classifiedsService;

        public ClassifiedsController(IClassifiedsServices classifiedsServices)
        {
            _classifiedsService = classifiedsServices;
        }

        [HttpGet]
        public IActionResult GetClassifieds()
        {
            return Ok(_classifiedsService.GetClassifieds());
        }

        [HttpGet("{id}", Name = "GetClassified")]
        public IActionResult GetClassified(int id)
        {
            return Ok(_classifiedsService.GetClassified(id));
        }

        [HttpPost]
        public IActionResult CreateClassified(Classified classified)
        {
            var newClassified = _classifiedsService.CreateClassified(classified);

            return CreatedAtRoute("GetClassified", new { newClassified.Id }, newClassified);
        }

        [HttpDelete]
        public IActionResult DeleteClassified(Classified classified)
        {
            _classifiedsService.DeleteClassified(classified);
            return Ok();
        }

        [HttpPut]
        public IActionResult EditClassified(Classified classified)
        {
            return Ok(_classifiedsService.EditClassified(classified));
        }

    }
}
