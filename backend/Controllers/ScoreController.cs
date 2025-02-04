using Backend.Interfaces;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[Route("api/scores")]
[ApiController]
public class ScoreController(IScoreService service) : ControllerBase
{
    [HttpGet]
    [Route("day")]
    public ActionResult<WeeklyScores> GetDailyScores()
    {
        var weeklyScores = service.GetDailyScores();
        return Ok(weeklyScores);
    }
    
    [HttpGet]
    [Route("week/example")]
    public ActionResult<WeeklyScores> GetExampleWeeklyScores()
    {
        var weeklyScores = service.GetExampleWeeklyScores();
        return Ok(weeklyScores);
    }
}