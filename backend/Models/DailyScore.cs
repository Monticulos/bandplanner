namespace Backend.Models;

public class DailyScore
{
    public int Id { get; set; }
    public required double Score { get; set; }
    public string[]? Description { get; set; }
}

