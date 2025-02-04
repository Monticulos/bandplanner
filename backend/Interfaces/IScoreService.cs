using Backend.Models;

namespace Backend.Services;

public interface IScoreService
{
    WeeklyScores GetWeeklyScores();
}