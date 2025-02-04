using Backend.Interfaces;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[Route("api/participants")]
[ApiController]
public class ParticipantController(IParticipantService service) : ControllerBase
{
    [HttpGet]
    public ActionResult<Participant[]> GetParticipants()
    {
        var participants = service.GetParticipants();
        return Ok(participants);
    }
    
    [HttpGet]
    [Route("example")]
    public ActionResult<Participant[]> GetExampleParticipants()
    {
        var participants = service.GetExampleParticipants();
        return Ok(participants);
    }
}
