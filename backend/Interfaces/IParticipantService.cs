﻿using Backend.Models;

namespace Backend.Services;

public interface IParticipantService
{
    Participant[] GetParticipants();
}