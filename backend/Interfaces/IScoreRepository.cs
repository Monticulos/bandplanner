using Backend.Models;

namespace Backend.Repositories;

public interface IScoreRepository
{
    WeeklyScores GetWeeklyScores();
}