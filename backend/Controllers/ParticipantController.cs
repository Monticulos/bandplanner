using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[Route("api/participants")]
[ApiController]
public class ParticipantController(IParticipantService participantService) : ControllerBase
{
    [HttpGet]
    public ActionResult<Participant[]> GetParticipants()
    {
        var participants = participantService.GetParticipants();
        return Ok(participants);
    }
}
