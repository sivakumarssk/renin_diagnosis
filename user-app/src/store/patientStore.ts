export type Patient = {
  id: string;
  name: string;
  age: string;
  gender: string;
  mobile: string;
  email?: string;
  address?: string;
};

export const PATIENTS: Patient[] = [
  { id: 'p1', name: 'Revathi Raj', age: '25', gender: 'Female', mobile: '+91 9874563210', email: 'suraksha150@gmail.com', address: '2-123, Banjara Hills,\nHyderabad, Telangana - 500034' },
  { id: 'p2', name: 'Ravi R', age: '45', gender: 'Male', mobile: '+91 9874563221' },
  { id: 'p3', name: 'Sukanya', age: '45', gender: 'Female', mobile: '+91 9874563221' },
];

let currentPatient: Patient | null = null;

export function setSelectedPatient(patient: Patient | null) {
  currentPatient = patient;
}

export function getSelectedPatient(): Patient | null {
  return currentPatient;
}