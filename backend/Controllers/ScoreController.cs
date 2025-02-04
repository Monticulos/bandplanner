using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[Route("api/scores")]
[ApiController]
public class ScoreController(IScoreService service) : ControllerBase
{
    [HttpGet]
    [Route("week")]
    public ActionResult<WeeklyScores> GetScoreForWeek()
    {
        var weeklyScores = service.GetWeeklyScores();
        return Ok(weeklyScores);
    }

    [HttpGet]
    [Route("day")]
    public ActionResult<DailyScore> GetScoreForDay()
    {
        return Ok(new DailyScore { Score = 60 });
    }
}