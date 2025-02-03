using Backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[Route("api/scores")]
[ApiController]
public class ScoreController : ControllerBase
{
    [HttpGet]
    [Route("week")]
    public ActionResult<WeeklyScores> GetScoreForWeek()
    {
        var weeklyScores = new WeeklyScores
        {
            Monday = new DailyScore { Score = 10 },
            Tuesday = new DailyScore { Score = 20 },
            Wednesday = new DailyScore { Score = 30 },
            Thursday = new DailyScore { Score = 40 },
            Friday = new DailyScore { Score = 50 },
            Saturday = new DailyScore { Score = 60 },
            Sunday = new DailyScore { Score = 70, Description = ["Fits for most of the participants."] },
        };

        return Ok(weeklyScores);
    }

    [HttpGet]
    [Route("day")]
    public ActionResult<DailyScore> GetScoreForDay()
    {
        return Ok(new DailyScore { Score = 60 });
    }
}