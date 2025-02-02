namespace Backend.Models;

public class WeeklyScores
{
    public required DailyScore Monday { get; set; }
    public required DailyScore Tuesday { get; set; }
    public required DailyScore Wednesday { get; set; }
    public required DailyScore Thursday { get; set; }
    public required DailyScore Friday { get; set; }
    public required DailyScore Saturday { get; set; }
    public required DailyScore Sunday { get; set; }
}