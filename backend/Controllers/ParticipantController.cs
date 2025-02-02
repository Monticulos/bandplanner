using Backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[Route("api/participants")]
[ApiController]
public class ParticipantController : ControllerBase
{
    [HttpGet]
    public ActionResult<Participant[]> GetMembers()
    {
        Participant[] participants =
        [
            new Participant { Name = "Jack Sparrow" },
            new Participant { Name = "Will Turner" },
            new Participant { Name = "Elizabeth Swan" }
        ];
        
        return Ok(participants);
    }
}
