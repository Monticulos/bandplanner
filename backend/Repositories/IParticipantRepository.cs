using Backend.Models;

namespace Backend.Repositories;

public interface IParticipantRepository
{
    Participant[] GetParticipants();
}