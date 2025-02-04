using Backend.Models;
using Backend.Repositories;

namespace Backend.Services;

public class ParticipantService(IParticipantRepository repository) : IParticipantService
{
    public Participant[] GetParticipants()
    {
        var participants = repository.GetParticipants();
        return participants;
    }
}