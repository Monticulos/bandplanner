using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class WeekController : ControllerBase
{
    [HttpGet]
    public ActionResult<string> GetDayScores()
    {
        return Ok("Day scores for the week");
    }
}