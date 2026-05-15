export interface Agent {
  id?: number;
  name: string;
  type: string;
}

export interface Ailment {
  id?: number;
  name: string;
  description?: string;
}

export interface Therapy {
  id?: number;
  name: string;
  description?: string;
}

export interface Appointment {
  id?: number;
  agent_id: number;
  ailment_id: number;
  therapy_id: number;
  appointment_date: string;
}
