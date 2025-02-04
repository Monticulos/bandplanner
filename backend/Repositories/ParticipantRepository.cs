using Backend.Models;

namespace Backend.Repositories;

public class ParticipantRepository : IParticipantRepository
{
    public Participant[] GetParticipants()
    {
        Participant[] participants =
        [
            new Participant { Name = "Jack Sparrow" },
            new Participant { Name = "Will Turner" },
            new Participant { Name = "Elizabeth Swan" }
        ];

        return participants;
    }
}